import React , { Component }from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <li
                onClick={this.handleClick}
                key={this.props.idx}
                dangerouslySetInnerHTML={{__html:this.props.content}}
            >
            </li>)
    }

    handleClick(){
        this.props.deleteItem(this.props.idx)
    }
}

export default TodoItem;
