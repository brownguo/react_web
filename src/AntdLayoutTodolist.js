import React,{ Component } from 'react';
import { Input ,Button, List} from 'antd';
import 'antd/dist/antd.css';

import store from './store/index';

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
        const action = {
            type: 'change_input_value',
            value: e.target.value
        };
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleButtonClick(){
        const action = {
            type:'add_todoitem',
        };
        store.dispatch(action);
    }

    handleDeleteItem(idx){
        const action = {
            type:'delete_todo_item',
            idx:idx
        };
        store.dispatch(action);
    }
}

export default AntdLayoutTodolist;
