import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LanguageSwitch } from "./LanguageSwitch";

export function AboutConnect() {
	return (
		<div
			id="about"
			className="d-flex flex-column align-items-start justify-content-between h-100"
		>
			<LanguageSwitch></LanguageSwitch>
			<div id="phoneNumber" className="text-success">
				<span className="fs-7">Связаться с нами:</span>
				<br />
				<span className="fs-5 fw-bold">+7 771 194 8890</span>
			</div>
			<div id="social" className="d-flex justify-content-start gap-2 fs-1">
				<div>
					<a
						href="https://www.instagram.com/thepathofmercy/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="text-white bg-success p-1 rounded" />
					</a>
				</div>
				<div>
					<a href="wa.link/f93bwr" target="_blank" rel="noopener noreferrer">
						<FaWhatsapp className="text-white bg-success p-1 rounded" />
					</a>
				</div>
			</div>
		</div>
	);
}
