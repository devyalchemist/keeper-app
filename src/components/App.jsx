import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([]);

	function addNotes(note) {
		setNotes((prev) => {
			return [note, ...prev];
		});
		console.log(notes);
	}
	function deleteNotes(id) {
		setNotes((prev) => {
			return prev.filter((e, i) => {
				return id !== i;
			});
		});
	}
	return (
		<div>
			<Header />
			<CreateArea addNote={addNotes} />
			{notes.map((e, i) => {
				return (
					<Note
						key={i}
						id={i}
						deleteNotes={deleteNotes}
						title={e.title}
						content={e.content}
					/>
				);
			})}
			{/* <Note title={"default"} content="default"></Note> */}
			<Footer />
		</div>
	);
}

export default App;
