import { createSelector } from 'reselect';

export const getNotes = (state) => state.notes.notesList;
export const getCurrentNoteId = (state) => state.notes.currentNote;
export const getSearchPhrase = (state) => state.notes.searchPhrase;

export const getSortedNotes = createSelector(
	getNotes,
	notes => notes.sort((a, b) => a.date < b.date ? 1 : -1)
);
export const getCurrentNote = createSelector(
	[getNotes, getCurrentNoteId],
	(notes, id) => notes.find(note => note.id === id)
);
