import React,{ Fragment, Component }from 'react';
import { Button, Input, List} from 'antd';
import 'antd/dist/antd.css';

import AntdTodoItem from './AntdTodoItem';


class AntdTodoList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            inputValue:'dadada',
            list:['Pek','HRB','ZJK'],
        }
    }

    render() {
        return (
            <Fragment>
                <label htmlFor="inputArea">请输入:</label>
                <Input
                    id="inputArea"
                    placeholder="请在这里输入哦~"
                    value={this.state.inputValue}
                    style={{width: 200}}
                    onChange={this.handleOnchange.bind(this)}
                />
                <Button type="primary" onClick={this.handleButtonClick.bind(this)}>Start!</Button>
                {
                    /*
                          <List
                    size="large"
                    bordered
                    dataSource={this.state.list}
                    renderItem={
                        (item,index) =>
                            <List.Item
                                onClick={this.deleteItem.bind(this,index)}
                                idx={index}
                            >
                                {item}
                            </List.Item>}
                />
                   */
                }

                <AntdTodoItem list={this.state.list} deleteListItem={this.deleteItem.bind(this)}/>

            </Fragment>
        )
    }

    handleOnchange(e){
        this.setState({
            inputValue : e.target.value,
        })
    }

    handleButtonClick(e){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:'',
        })
    }

    deleteItem(idx){
        const list = [...this.state.list];
        list.splice(idx,1);
        this.setState({
            list:list
        })
    }
}
export default AntdTodoList;
