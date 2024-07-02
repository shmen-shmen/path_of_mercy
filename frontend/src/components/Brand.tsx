import { Navbar } from "react-bootstrap";

function Brand() {
	return (
		<Navbar.Brand
			className="d-flex flex-row align-items-stretch js gap-2 bg-"
			href="#home"
		>
			<img alt="brand logo" src="/logo-round.png" width="120" height="120" />
			<div className="d-flex flex-column align-items-start justify-content-center">
				<div className="text-primary fs-5">Частный</div>
				<div className="text-primary fs-5">Благотворительный</div>
				<div className="text-primary fs-5">Фонд</div>
			</div>
		</Navbar.Brand>
	);
}

export default Brand;
