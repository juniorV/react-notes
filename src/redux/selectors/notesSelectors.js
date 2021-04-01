import { createSelector } from 'reselect';

export const getNotes = (state) => state.getIn(['notes', 'notesList']);
export const getCurrentNoteId = (state) => state.getIn(['notes', 'currentNote']);
export const getSearchPhrase = (state) => state.getIn(['notes', 'searchPhrase']);

export const getSortedNotes = createSelector(
	getNotes,
	notes => notes.sort((a, b) => a.get('date') < b.get('date') ? 1 : -1)
);
export const getCurrentNote = createSelector(
	[getNotes, getCurrentNoteId],
	(notes, id) => notes.find(note => note.get('id') === id)
);
