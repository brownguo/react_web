import React,{Fragment}from 'react';

// Fragment 占位符，影藏最外层的dom标签
function TodoList() {
    return (
        <Fragment>
            <input/> <button>Go!!!</button>
            <ul>
                <li>First!</li>
            </ul>
        </Fragment>
    )
}

export default TodoList;
