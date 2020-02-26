
//数据仓库
const defaultState = {
    //这里的input在onChange触发一次就改变一次。
    inputValue: '来自Reducer的默认值~',
    list:[
        '山川异域，风月同天。',
        '青山一道同风雨，明月何曾是两乡。',
        '岂曰无衣，与子同裳。',
        '辽河雪融，富山花开；同气连枝，共盼春来。',
    ]
};

//这里必须返回函数。state 整个store仓库里的数据，所有数据。把仓库返回给store

export default (state = defaultState,action) => {

    if(action.type === 'change_input_value'){
        //reducer 可以接受state，不能修改state
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === 'add_todoitem'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if(action.type === 'delete_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.idx,1);
        return newState;
    }

    //store的默认是，这里的state也就是defaultState
    return state;
}
