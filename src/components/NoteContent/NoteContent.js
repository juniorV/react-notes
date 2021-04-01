import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './NoteContent.module.css';
import { updateNote } from '../../redux/actions/notesActions';
import { getCurrentNote } from '../../redux/selectors/notesSelectors';

const NoteContent = function(props) {
	let note = useSelector(getCurrentNote);
	const dispatch = useDispatch();

	const changeTitle = (title) => {
		dispatch(updateNote({...note, title: title}));
	}
	const changeText = (text) => {
		dispatch(updateNote({...note, text: text}));
	}

	return <>
		{note &&
		<div className={s.content}>
			<input type="text" value={note.title} onChange={e => changeTitle(e.currentTarget.value)}/>
			<textarea rows="10" value={note.text} onChange={(e) => changeText(e.currentTarget.value)}/>
		</div>}
	</>
};

export { NoteContent };
