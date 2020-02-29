import {CHANGE_INPUT_VALUE,GET_INIT_LIST,ADDTODOITEM,DELETE_TODO_ITEM,INIT_LIST} from './actionTypes';
export const getInputChangeAction = (value) =>({
    type:CHANGE_INPUT_VALUE,
    value:value
});

export const getAddItemAction = () =>({
    type:ADDTODOITEM
});

export const getDeleteTodoItem = (idx)=>({
    type:DELETE_TODO_ITEM,
    idx:idx
});

export const initListAction = (data)=>({
    type:INIT_LIST,
    data:data
});


// export const getApiTodoList = () =>{
//     return (dispatch) => {
//         axios.get('/api/todolist')
//             .then((res) => {
//                 const data = res.data;
//                 const action = initListAction(data);
//                 dispatch(action);
//             })
//             .catch(() => {console.log('error')})
//     }
// };


export const getInitListAction = ()=>({
    type:GET_INIT_LIST,
});
