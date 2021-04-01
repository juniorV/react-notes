import {
	ADD_NOTE,
	REMOVE_NOTE, SET_CURRENT_NOTE, SET_SEARCH_PHRASE,
	UPDATE_NOTE,
} from '../constants/notesConstants';

export const setSearchPhrase = (phrase) => {
	return {type: SET_SEARCH_PHRASE, payload: phrase};
}

export const addNote = () => {
	return {type: ADD_NOTE, payload: {title: 'Новая заметка', text: ''}};
};

export const setCurrentNote = (note) => {
	return {type: SET_CURRENT_NOTE, payload: note};
};

export const removeNote = (id) => {
	return {type: REMOVE_NOTE, payload: id};
};

export const updateNote = (note) => {
	return {type: UPDATE_NOTE, payload: note};
};
