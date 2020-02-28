import React,{ Component } from 'react';
import AntdLayoutTodolistUI from './AntdLayoutTodolistUI';
import store from './store/index';
import {getAddItemAction,getDeleteTodoItem,getInputChangeAction,initListAction} from './store/actionCreators';
import axios from 'axios';


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

    componentDidMount() {
        axios.get('/api/todolist')
            .then((res) => {
                const data = res.data;
                const action = initListAction(data);
                store.dispatch(action);
            })
            .catch(() => {console.log('error')})
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
