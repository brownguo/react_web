import React , { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const {content,test} = this.props
        return (
            <li
                onClick={this.handleClick}
                key={this.props.idx}
            >
                {test}-{content}
            </li>)
    }

    handleClick(){
        const {deleteItem,idx} = this.props;
        deleteItem(idx);
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

TodoItem.defaultProps = {
    test:'Hello!!'
};
export default TodoItem;
