import React,{ Fragment, Component }from 'react';
import TodoItem from './TodoItem'

import './style.css'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state  = {
            inputValue: '',
            list:['默认第一个UL！']
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete  = this.handleItemDelete.bind(this);
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
