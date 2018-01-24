import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import loadToken from './actions/loadToken';

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(loadToken());

window.store = store;

export default store;
