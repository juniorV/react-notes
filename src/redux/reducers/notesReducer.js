import {
	ADD_NOTE, REMOVE_NOTE,
	SET_CURRENT_NOTE, SET_SEARCH_PHRASE,
	UPDATE_NOTE,
} from '../constants/notesConstants';
import { fromJS, Map } from 'immutable';

const initialState = fromJS({
	notesList: [
		{
			id: '_testid1',
			title: 'Test title 1',
			text: 'Test description 1',
			date: +new Date(),
		}, {
			id: '_testid2',
			title: 'test Title 2',
			text: 'Test description 2',
			date: +new Date() + 1,
		}, {
			id: '_testid3',
			title: 'test Title 3',
			text: 'Test description 3',
			date: +new Date() + 2,
		}, {
			id: '_testid4',
			title: 'test Title 4',
			text: 'Test description 4',
			date: +new Date() + 3,
		}, {
			id: '_testid5',
			title: 'test Title 5',
			text: 'Test description 5',
			date: +new Date() + 4,
		}],
	currentNote: null,
	searchPhrase: '',
});

const ID = function() {
	return '_' + Math.random().toString(36).substr(2, 9);
};

export const notesReducer = (notes = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_PHRASE:
			return notes.set('searchPhrase', action.payload);
		case SET_CURRENT_NOTE:
			return notes.set('currentNote', action.payload.get('id'));
		case ADD_NOTE:
			const newId = ID();
			return notes.update('notesList', list => list.push(
				Map({...action.payload, id: newId, date: +new Date()})))
				.set('currentNote', newId);
		case REMOVE_NOTE:
			return notes.update('notesList',
				list => list.filter(n => n.get('id') !== action.payload));
		case UPDATE_NOTE:
			return notes.update('notesList', list => list.map(
				n => n.get('id') === action.payload.get('id') ? n.merge(
					action.payload.set('date', +new Date())) : n));
		default:
			return notes;
	}
};
