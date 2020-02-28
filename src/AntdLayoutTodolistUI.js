import React from 'react';
import {Button, Input, List} from "antd";
import 'antd/dist/antd.css';

const AntdLayoutTodolistUI = (props) => {
    return(
        <div>
            <div>
                <Input
                    value={props.inputValue}
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
            </div>
            <List
                style={{marginTop :'10px',width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,idx) => (
                    <List.Item onClick={(index) => props.handleDeleteItem(idx)}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
};


// class AntdLayoutTodolistUI extends Component{
//     render() {
//         return(
//             <div>
//                 <div>
//                     <Input
//                         value={this.props.inputValue}
//                         style={{width:'300px',marginRight:'10px'}}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
//                 </div>
//                 <List
//                     style={{marginTop :'10px',width:'300px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,idx) => (
//                         <List.Item onClick={(index) => this.props.handleDeleteItem(idx)}>
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }

export default AntdLayoutTodolistUI;
