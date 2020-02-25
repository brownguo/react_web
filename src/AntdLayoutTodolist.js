import React,{ Component } from 'react';
import { Input ,Button, List} from 'antd';
import 'antd/dist/antd.css';

import store from './store/index';

class AntdLayoutTodolist  extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
    }

    render() {
        return (
            <div>
                <div>
                    <Input value={this.state.inputValue} style={{width:'300px',marginRight:'10px'}}/>
                    <Button type="primary">提交</Button>
                </div>
                <List
                    style={{marginTop :'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default AntdLayoutTodolist;
