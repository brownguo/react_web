import React,{ Component } from 'react';
import { Input ,Button, List} from 'antd';
import 'antd/dist/antd.css';

import store from './store/index';
import {ADDTODOITEM,CHANGE_INPUT_VALUE,DELETE_TODO_ITEM} from './store/actionTypes';
import {getAddItemAction,getDeleteTodoItem,getInputChangeAction} from './store/actionCreators';

class AntdLayoutTodolist  extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        //this.handleDeleteItem  = this.handleDeleteItem.bind(this);
        //监听store
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div>
                <div>
                    <Input
                        value={this.state.inputValue}
                        style={{width:'300px',marginRight:'10px'}}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                </div>
                <List
                    style={{marginTop :'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,idx) => (
                        <List.Item onClick={this.handleDeleteItem.bind(this,idx)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    //监听store变化，store数据由reducer返回。
    handleStoreChange(){
        this.setState(store.getState());
    }

    handleButtonClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleDeleteItem(idx){
        const action = getDeleteTodoItem(idx);
        store.dispatch(action);
    }
}

export default AntdLayoutTodolist;
