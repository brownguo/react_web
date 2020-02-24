import React,{ Fragment, Component }from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'
import './style.css'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state  = {
            inputValue: '',
            list:[]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete  = this.handleItemDelete.bind(this);
    }

    //生命周期函数：在组件执行的某一时刻会自动执行的函数。

    //在组件即将被挂再到页面的时刻自动执行，组件第一次加载的时候会执行
    /*
    componentWillMount() {
        console.log('componentWillMount：开始加载页面~')
    }

    //Ajax请求写在这里
    componentDidMount() {
        console.log('componentDidMount：页面加载完了~')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate：是否需要执行？True => 组件即将变更的时候执行');
        return true; //false 都不会执行
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate：组件被更新之前，会自动执行');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate:组件数据完成更新之后执行');
    }*/

    componentDidMount() {
        axios.get('/api/todolist')
            .then((res) => {
                this.setState(() => ({
                    list:[...res.data]
                }));
            })
            .catch(() => {console.log('error')})
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputArea">输入内容</label>
                    <input
                        id="inputArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleButtonClick}>添加</button>
                </div>

                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>

            </Fragment>
        )
    }

    getTodoItem() {
          return this.state.list.map((item,index) => {
              return (
                      <TodoItem
                          key={index}
                          content={item}
                          idx={index}
                          deleteItem={this.handleItemDelete}
                      />
              )
          })
    }

    handleInputChange(e){
        //const value = e.target.value;
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleButtonClick(e){
        this.setState((prevState) => ({
            list:[...prevState.list,prevState.inputValue],
            inputValue:'',
        }),() => {
            console.log(this.ul.querySelectorAll('li').length);
        })
    }

    handleItemDelete(idx){
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(idx,1);
            return {list}
        })
    }
}

export default TodoList;
