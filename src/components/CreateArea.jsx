import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea({ addNote }) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});
	const [fullDisplay, setFullDisplay] = useState(false);
	function handleChange(event) {
		const { name, value } = event.target;
		setNote((prev) => {
			return { ...prev, [name]: value };
		});
		console.log(note);
	}
	function makeFullDisplay() {
		setFullDisplay(true);
	}
	function handleSubmit(event) {
		event.preventDefault();
	}
	return (
		<div>
			<form className="create-note" onSubmit={handleSubmit}>
				{fullDisplay && (
					<input
						onChange={handleChange}
						name="title"
						placeholder="Title"
						value={note.title}
					/>
				)}
				<textarea
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows={fullDisplay ? "3" : "1"}
					value={note.content}
					onClick={makeFullDisplay}
				/>
				<Zoom in={fullDisplay ? true : false}>
					<Fab
						onClick={() => {
							addNote(note);
							setNote({
								title: "",
								content: "",
							});
						}}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
