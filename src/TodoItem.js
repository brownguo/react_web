import React , { Component }from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const {content} = this.props
        return (
            <li
                onClick={this.handleClick}
                key={this.props.idx}
                dangerouslySetInnerHTML={{__html:content}}
            >
            </li>)
    }

    handleClick(){
        const {deleteItem,idx} = this.props;
        deleteItem(idx);
    }
}

export default TodoItem;
