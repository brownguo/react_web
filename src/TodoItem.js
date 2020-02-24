import React , { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }


    /*
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps:当组件从父组件接收了参数，只要父组件Render【重新】被执行就会自动运行。');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount:当组件即将被从页面剔除的时候，会被执行。例如:删除一个dom');
    }*/

    render() {
        const {content,test} = this.props;
        return (
            <li
                onClick={this.handleClick}
                key={this.props.idx}
            >
                {test} - {content}
            </li>)
    }

    handleClick(){
        const {deleteItem,idx} = this.props;
        deleteItem(idx);
    }
}

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

TodoItem.defaultProps = {
    test:'Hello!!'
};
export default TodoItem;
