import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from "./components/main/Main.tsx";
import Header from "./components/header/Header.tsx";

function App() {
	return (
		<>
			<Header></Header>
			<Main></Main>
		</>
	);
}

export default App;
