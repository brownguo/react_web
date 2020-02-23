import React,{ Fragment, Component }from 'react';
// Fragment 占位符，影藏最外层的dom标签
/*
function TodoList() {
    return (
        <Fragment>
            <div>
                <input/> <button>Go!!!</button>
            </div>

            <ul>
                <li>First!</li>
            </ul>
        </Fragment>
    )
}*/

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state  = {
            inputValue: '',
            list:['第一课,下标为0']
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>添加</button>
                </div>

                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return <li
                                key={index}
                                onClick={this.handleItemDelete.bind(this,index)}
                            >
                                {item}
                            </li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        //alert(e.target.value);
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
