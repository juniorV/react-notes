import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchPhrase } from '../../../redux/selectors/notesSelectors';
import { setSearchPhrase } from '../../../redux/actions/notesActions';
import s from './Search.module.css';

function Search(props) {
	const searchPhrase = useSelector(getSearchPhrase);
	const dispatch = useDispatch();

	const onPhraseChange = (text) => {
		dispatch(setSearchPhrase(text.toLowerCase()));
	};

	return <div className={s.search}>
		<input type="text"
			   className={s.searchInput}
			   value={searchPhrase}
			   placeholder='Search Everywhere'
			   onChange={e => onPhraseChange(e.currentTarget.value)}/>
	</div>;
}

export { Search };
