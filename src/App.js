import React from 'react';
import './App.css';
import { NotesList } from './components/NotesList/NotesList';
import { NoteContent } from './components/NoteContent/NoteContent';
import { NotesHeader } from './components/NotesHeader/NotesHeader';

function App() {
	return (<>
		<div className="main">
			<NotesHeader/>
			<div className="wrapper">
				<NotesList/>
				<NoteContent/>
			</div>
		</div>
	</>);
}

export default App;
