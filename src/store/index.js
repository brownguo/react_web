
//Store做数据分发，创建store的时候先要把reducer传过去。
import { createStore } from 'redux'
import reducer from './reducer';

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer);

export default store;
