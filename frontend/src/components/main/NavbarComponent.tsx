import Nav from "react-bootstrap/Nav";
import { useLocation, Link } from "react-router-dom";
import "./main.css";

function NavbarComponent() {
	const destinations = [
		{ path: "news", name: "Новости" },
		{ path: "theyNeedHelp", name: "Им нужна помощь" },
		{ path: "weHelpedThem", name: "Кому мы помогли" },
		{ path: "aboutUs", name: "О Фонде" },
	];
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<Nav
			fill
			variant="pills"
			defaultActiveKey={currentPath}
			className="justify-content-center"
		>
			{destinations.map((dest) => {
				const path = "/" + dest.path;
				const active = currentPath === "/" + dest.path;
				return (
					<Nav.Item key={dest.path} className="flex-grow-1">
						<Nav.Link
							as={Link}
							to={path}
							className={`fs-5 ${
								active
									? "active bg-success-subtle fw-bold text-success"
									: "text-success "
							}`}
						>
							{dest.name}
						</Nav.Link>
					</Nav.Item>
				);
			})}
		</Nav>
	);
}

export default NavbarComponent;
