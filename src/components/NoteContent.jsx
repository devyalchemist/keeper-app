import React, { useState } from "react";
import { use } from "react";

function NoteContent({ content, id }) {
	const [isClicked, setClick] = useState(false);
	const [pid, setPid] = useState();
	function crossOut(id) {
		// const selected = notes[id];
		// const id = id;
		setPid(id);
		setClick(!isClicked);
	}
	return (
		<>
			<p
				id={id}
				style={{
					textDecoration: pid === id && isClicked ? "line-through" : "none",
					cursor: "pointer",
				}}
				onClick={() => crossOut(id)}>
				{content}
			</p>
		</>
	);
}

export default NoteContent;
