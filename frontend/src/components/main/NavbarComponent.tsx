import Nav from "react-bootstrap/Nav";

function NavbarComponent() {
	return (
		<Nav justify variant="tabs" defaultActiveKey="/home">
			<Nav.Item>
				<Nav.Link href="/News" className="fs-5">
					Новости
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/TheyNeedHelp" className="fs-5">
					Им нужна помощь
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/WeHelpedThem" className="fs-5">
					Кому Мы помогли
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/AboutUs" className="fs-5">
					О Фонде
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default NavbarComponent;
