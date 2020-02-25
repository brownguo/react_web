import React,{ Component,Fragment} from 'react'

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:['北京','上海','呼和浩特']
        }
    }
    render() {
        return (
            <Fragment>
                <input value={this.state.inputValue} onChange={this.handleInput.bind(this)} />
                <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                <ul>
                    {
                        this.state.list.map((item,index) =>{
                            return(
                                <li key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInput(e){
        this.setState({
            inputValue:e.target.value
        })
    }

    handleDelete(index){
        this.setState((prevState) =>{
            const list = [...prevState.list];
            list.splice(index,1)
            return {list}
        })
    }

    handleButtonClick(e){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:'',
        })
    }
}
export default Test;
