import React,{ Component } from 'react';
import AntdLayoutTodolistUI from './AntdLayoutTodolistUI';
import store from './store/index';

import {getAddItemAction,getDeleteTodoItem,getInputChangeAction} from './store/actionCreators';

class AntdLayoutTodolist  extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDeleteItem  = this.handleDeleteItem.bind(this);
        //监听store
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <AntdLayoutTodolistUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange = {this.handleInputChange}
                handleButtonClick={this.handleButtonClick}
                handleDeleteItem={this.handleDeleteItem}
            />
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
