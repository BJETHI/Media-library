import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

//From NextJS Tutorial
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMidddleWare from 'redux-thunk';
//  Returns the store instance
// It can  also take initialState argument when provided
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;