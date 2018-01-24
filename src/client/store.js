import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import relogin from './actions/relogin';

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(relogin());

window.store = store;

export default store;
