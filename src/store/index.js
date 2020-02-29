//Store做数据分发，创建store的时候先要把reducer传过去。
import { createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk';


const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    reducer,
    enhancer
);

export default store;
