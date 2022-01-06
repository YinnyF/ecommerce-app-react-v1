import React from "react";
import ReactDOM from "react-dom";

// to set up bootstrap
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// import css file
import "./index.css";

import NavBar from "./App";

ReactDOM.render(<NavBar />, document.getElementById("root"));
