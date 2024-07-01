import React from "react";
import "./Header.css";
import { Navbar } from "react-bootstrap";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Header() {
	return (
		<header className="d-flex align-items-center">
			<div className="container header__container">
				<div className="row align-items-center">
					<div className="col header__col fs-4">
						<Navbar.Brand
							className="d-flex justify-content-start align-items-center"
							href="#home"
						>
							<img
								alt=""
								src="/logo-round.png"
								width="100"
								height="100"
								className="d-inline-block"
							/>{" "}
							<span className="d-lg-inline-block ms-2 text-success">
								ЧБФ Путь Милосердия
							</span>
						</Navbar.Brand>
					</div>
					<div className="col header__col d-flex flex-column align-items-center">
						<div className="fs-6 text-secondary text-start">Телефон: </div>
						<div className="d-inline-block fs-5">+7 771 194 8890</div>
					</div>
					<div className="col header__col d-flex flex-column gap-1">
						<div className="d-flex justify-content-center gap-2">
							<span className="fs-5">Instagram</span>
							<FaInstagram className="m-1 fs-3" />
						</div>
						<div className="d-flex justify-content-center gap-2">
							<span className="fs-5">WhatsApp</span>
							<FaWhatsapp className="m-1 fs-3" />
						</div>
					</div>
					<div className="col header__col">
						<div>
							<span>Қазақша</span>
							<span> | </span>
							<span>Русский</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
