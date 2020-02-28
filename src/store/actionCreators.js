import {CHANGE_INPUT_VALUE,ADDTODOITEM,DELETE_TODO_ITEM} from './actionTypes';

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
