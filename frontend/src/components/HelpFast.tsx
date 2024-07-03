import { Image, Button } from "react-bootstrap";
export function HelpFast() {
	return (
		<div
			id="helpFast"
			className="d-flex flex-column justify-content-between h-100"
		>
			<Image
				src="./kaspi_qr.jpg"
				alt="kaspi QR code"
				rounded
				width="110"
				height="110"
				className="border border-4 border-success"
			/>
			<Button variant="success" className="p-1 border-0">
				Помочь
			</Button>
		</div>
	);
}
