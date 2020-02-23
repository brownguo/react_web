import React,{ Fragment, Component }from 'react';
import TodoItem from './TodoItem'

import './style.css'
// Fragment 占位符，影藏最外层的dom标签

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state  = {
            inputValue: '',
            list:['默认第一个UL！']
        }
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
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>添加</button>
                </div>

                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <Fragment>
                                    <TodoItem
                                        content={item}
                                        idx={index}
                                        deleteItem={this.handleItemDelete.bind(this)}
                                    />
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleButtonClick(e){
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(idx){
        const list = [...this.state.list];
        list.splice(idx,1);
        this.setState({
            list:list,
        })
    }
}

export default TodoList;
