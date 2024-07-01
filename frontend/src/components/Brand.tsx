import { Navbar } from "react-bootstrap";

function Brand() {
	return (
		<Navbar.Brand className="d-flex flex-column align-items-start" href="#home">
			<img alt="brand logo" src="/logo-round.png" width="120" height="120" />
			<span className="text-primary fs-5">ЧБФ "Путь Милосердия"</span>
		</Navbar.Brand>
	);
}

export default Brand;
