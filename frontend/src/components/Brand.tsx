import { Navbar, Image } from "react-bootstrap";

export function Brand() {
	return (
		<Navbar.Brand
			id="brand"
			className="d-flex flex-row align-items-stretch gap-2"
			href="#home"
		>
			<Image alt="brand logo" src="/logo-round.png" width="150" height="150" />
			<div className="d-flex flex-column align-items-start justify-content-around">
				<h1 className="fw-bold fs-4 mb-0">
					ПУТЬ <br />
					МИЛОСЕРДИЯ
				</h1>
				<div>Частный</div>
				<div>Благотворительный</div>
				<div>Фонд</div>
			</div>
		</Navbar.Brand>
	);
}
