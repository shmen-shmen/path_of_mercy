import Brand from "./Brand";
import { LanguageSwitch } from "./LanguageSwitch";
import { PropsWithChildren } from "react";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function HeaderElement({ children }: PropsWithChildren) {
	return <div className="col-auto">{children}</div>;
}

function Header() {
	return (
		<header className="bg-primary-subtle">
			<div className="container-fluid py-1 border-primary border-bottom border-2">
				<div className="row justify-content-center align-items-center">
					<HeaderElement>
						<Brand />
					</HeaderElement>
					<HeaderElement>
						<LanguageSwitch></LanguageSwitch>
					</HeaderElement>
				</div>
			</div>
		</header>
	);
}

export default Header;
