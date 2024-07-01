import "./App.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header></Header>
			<NavbarComponent></NavbarComponent>
		</>
	);
}

export default App;
