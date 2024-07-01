import "./NavbarComponent.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
	return (
		<Navbar expand="md" className="bg-info bg-gradient w100 sticky-top ">
			<Container className="justify-content-center">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="w-100 justify-content-around">
						<Nav.Link href="#home" className="fs-5">
							Новости
						</Nav.Link>
						<Nav.Link href="#link" className="fs-5">
							Им нужна помощь
						</Nav.Link>
						<Nav.Link href="#link" className="fs-5">
							Обратиться в Фонд
						</Nav.Link>
						<Nav.Link href="#link" className="fs-5">
							Кому Мы помогли
						</Nav.Link>
						<Nav.Link href="#link" className="fs-5">
							О нас
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarComponent;
