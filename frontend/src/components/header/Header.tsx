import { PropsWithChildren } from "react";
import "./NavbarComponent.css";
import { Brand } from "./Brand";
import { AboutConnect } from "./AboutConnect";
import { HelpFast } from "./HelpFast";

function HeaderElement({ children }: PropsWithChildren) {
	return (
		<div className="header__el col-auto d-flex flex-column justify-content-around m-md-1">
			{children}
		</div>
	);
}

function Header() {
	return (
		<header className="bg-success-subtle text-success">
			<div className="container-fluid py-0 border-success border-bottom border-4 ">
				<div className="header-row row justify-content-center align-items-stretch mb-0">
					<HeaderElement>
						<Brand />
					</HeaderElement>
					<HeaderElement>
						<AboutConnect></AboutConnect>
					</HeaderElement>
					<HeaderElement>
						<HelpFast></HelpFast>
					</HeaderElement>
				</div>
			</div>
		</header>
	);
}

export default Header;
