import React from 'react';
import { useSelector } from 'react-redux';
import {
	getSearchPhrase, getSortedNotes,
} from '../../redux/selectors/notesSelectors';
import s from './NotesList.module.css';
import { NoteLink } from './NoteLink/NoteLink';
import { Search } from './Search/Search';

const NotesList = function(props) {
	const notes = useSelector(getSortedNotes);
	const filteredPhrase = useSelector(getSearchPhrase);
	const filteredNotes = filteredPhrase ? notes.filter(
		(note) => note.get('title').toLowerCase().includes(filteredPhrase) ||
			note.get('text').toLowerCase().includes(filteredPhrase)) : notes;

	return <div className={s.notesWrapper}>
		<div className={s.notes}>
				{filteredNotes.size
					? filteredNotes.map(note => <NoteLink key={note.get('id')} note={note}/>)
					: <div className='message'>There are no notes.</div>
				}
		</div>
		<Search/>
	</div>;
};

export { NotesList };
