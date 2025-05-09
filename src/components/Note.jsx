import React, { useState } from "react";
import NoteContent from "./NoteContent";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ deleteNotes, id, title, content, crossOut }) {
	return (
		<div className="note">
			<h1>{title}</h1>
			<NoteContent id={id} identify={crossOut} content={content}></NoteContent>
			<button
				onClick={() => {
					deleteNotes(id);
					console.log(`clicked ${id}`);
				}}>
				<DeleteIcon />
			</button>
		</div>
	);
}

export default Note;
