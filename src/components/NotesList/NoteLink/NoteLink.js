import React from 'react';
import s from './NoteLink.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentNote } from '../../../redux/actions/notesActions';
import { getCurrentNoteId } from '../../../redux/selectors/notesSelectors';

const NoteLink = function({note}) {
	const currentNote = useSelector(getCurrentNoteId)
	const dispatch = useDispatch();
	const setCurrent = () => {
		dispatch(setCurrentNote(note));
	}
	return <div className={s.note +  (currentNote === note.get('id') ? ' ' + s.active : '')} onClick={setCurrent}>
		{note.get('title')}
	</div>;
};

export { NoteLink };
