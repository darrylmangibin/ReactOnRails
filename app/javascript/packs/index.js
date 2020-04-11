import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<CssBaseline>
			<App />
		</CssBaseline>,
		document.body.appendChild(document.createElement("div"))
	);
});
