//Store做数据分发，创建store的时候先要把reducer传过去。
import { createStore,applyMiddleware} from 'redux'
import reducer from './reducer';
//import thunk from 'redux-thunk';
import todoSagas from './sagas';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
//
// const enhancer = composeEnhancers();

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(todoSagas);

export default store;
