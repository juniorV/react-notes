import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, removeNote } from '../../redux/actions/notesActions';
import { getCurrentNote } from '../../redux/selectors/notesSelectors';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NotesHeader(props) {
	const dispatch = useDispatch();
	const currentNote = useSelector(getCurrentNote);

	const addNoteFn = () => {
		dispatch(addNote());
	};

	const removeNoteFn = () => {
		dispatch(removeNote(currentNote.get('id')));
	};

	return <div className='wrapper'>
		<div className='icon-wrapper text-right'>
			<button className='icon-btn' onClick={removeNoteFn}
					disabled={!currentNote}>
				<FontAwesomeIcon icon={faTrash}/>
			</button>
		</div>
		<div className='icon-wrapper'>
			<button className='icon-btn' onClick={addNoteFn}>
				<FontAwesomeIcon icon={faEdit}/>
			</button>
		</div>
	</div>;
}

export { NotesHeader };
