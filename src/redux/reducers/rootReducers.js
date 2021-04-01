import { notesReducer } from './notesReducer';
import { combineReducers } from 'redux-immutable';

export default combineReducers({
	notes: notesReducer,
});
