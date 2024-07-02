import Brand from "./Brand";
import { LanguageSwitch } from "./LanguageSwitch";
import { PropsWithChildren } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./NavbarComponent.css";

function HeaderElement({ children }: PropsWithChildren) {
	return (
		<div className="col-auto justify-content-around flex-column">
			{children}
		</div>
	);
}

function AboutConnect() {
	return (
		<div className="d-flex flex-column align-items-start justify-content-around  h-100">
			<LanguageSwitch></LanguageSwitch>
			<div id="phoneNumber" className="text-primary">
				<span className="fs-7">Телефон:</span>
				<br />
				<span className="fs-5">+7 771 194 8890</span>
			</div>
			<div id="social" className="d-flex justify-content-start">
				<div>
					<a href="https://www.instagram.com/thepathofmercy/" target="/blank">
						<FaInstagram className="text-primary fs-1" />
					</a>
				</div>
				<div>
					<a href="wa.link/f93bwr" target="/blank">
						<FaWhatsapp className="text-primary fs-1" />
					</a>
				</div>
			</div>
		</div>
	);
}

function Header() {
	return (
		<header className="bg-primary-subtle">
			<div className="container-fluid py-1 border-primary border-bottom border-2">
				<div className="row justify-content-center align-items-stretch">
					<HeaderElement>
						<Brand />
					</HeaderElement>
					<HeaderElement>
						<AboutConnect></AboutConnect>
					</HeaderElement>
				</div>
			</div>
		</header>
	);
}

export default Header;
