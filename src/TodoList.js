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
    render() {
        return (
            <Fragment>
                <div>
                    <input/> <button>Go!!!</button>
                </div>

                <ul>
                    <li>Go!</li>
                    <li>Go!!</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;
