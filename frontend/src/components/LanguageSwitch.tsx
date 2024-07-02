import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";
import "./NavbarComponent.css";

export function LanguageSwitch(): JSX.Element {
	const [radioValue, setRadioValue] = useState<string>("RU");
	const languages: { key: string; label: string }[] = [
		{ key: "KZ", label: "Казакша" },
		{ key: "RU", label: "Русский" },
	];
	return (
		<ButtonGroup size="sm">
			{languages.map(({ key, label }) => {
				return (
					<ToggleButton
						key={key + "-selector"}
						className={`btn-xs fs-7 btn-outline-primary bg-${
							radioValue === key ? "primary" : "transparent"
						}`}
						id={"langToggle" + key}
						type="radio"
						name="radio"
						value={key}
						checked={radioValue === key}
						onChange={(e) => setRadioValue(e.currentTarget.value)}
					>
						{label}
					</ToggleButton>
				);
			})}
		</ButtonGroup>
	);
}
