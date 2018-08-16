import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import Footer from "./components/footer";

ReactDOM.render(<App />, document.getElementById("header"));
ReactDOM.render(<Counters />, document.getElementById("counter"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
registerServiceWorker();
