import React,{ Component }from 'react';
import {List} from 'antd';
import 'antd/dist/antd.css';

class AntdTodoItem extends Component{

    render() {
        return (
            <List
                size="large"
                bordered
                dataSource={this.props.list}
                renderItem={
                    (item,index) =>
                        <List.Item
                            onClick={this.deleteItem.bind(this,index)}
                            idx={index}
                        >
                            <span dangerouslySetInnerHTML={{__html:item}}></span>
                        </List.Item>}
            />
        );
    }

    deleteItem(idx){
        this.props.deleteListItem(idx)
    }
}

export default AntdTodoItem;
