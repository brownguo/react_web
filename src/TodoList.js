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
            list:[]
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
                    <button>Go!!!</button>
                </div>

                <ul>
                    <li>Go1</li>
                    <li>Go!!</li>
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

}

export default TodoList;
