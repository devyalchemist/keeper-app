import React from "react";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>
				Copyright ⓒ {year} by devyalchemist{" "}
				<a href="https://github.com/devyalchemist">
					<i class="fa-brands fa-github"></i>
				</a>{" "}
			</p>
		</footer>
	);
}

export default Footer;
