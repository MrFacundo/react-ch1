import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./Component";

function App() {
	const data = [
		{ Country: "India", City: "Bangalore", id: 1 },
		{ Country: "Italy", City: "Rome", id: 2 },
		{ Country: "USA", City: "New York", id: 3 },
	];
	return <Component data={data} />;
}

export default App;
