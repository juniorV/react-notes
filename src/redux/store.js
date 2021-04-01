import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/rootReducers';
import { Map } from 'immutable';

export default createStore(
	reducers,
	Map({}),
	composeWithDevTools(),
);
