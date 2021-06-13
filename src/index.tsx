import "./style.css";
import React from "react";
import ReactDOM from "react-dom";

import Foo from "./components/Foo/Foo";

ReactDOM.render(
	<React.StrictMode>
		<Foo />
	</React.StrictMode>,
	document.getElementById("root")
);