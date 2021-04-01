import { notesReducer } from './notesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	notes: notesReducer,
});
