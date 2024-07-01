import "./Header.css";
import Brand from "./Brand";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Header() {
	return (
		<header className="bg-primary-subtle">
			<div className="container-fluid py-1 border-primary border-bottom border-2">
				<div className="row justify-content-center align-items-center">
					<div className="col-auto">
						<Brand />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
