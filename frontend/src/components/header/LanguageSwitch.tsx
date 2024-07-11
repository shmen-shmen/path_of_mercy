import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";
import "./Header.css";

export function LanguageSwitch(): JSX.Element {
	const [radioValue, setRadioValue] = useState<string>("RU");
	const languages: { key: string; label: string }[] = [
		{ key: "KZ", label: "Казакша" },
		{ key: "RU", label: "Русский" },
	];
	return (
		<ButtonGroup id="languageSwitch" size="sm">
			{languages.map(({ key, label }) => {
				return (
					<ToggleButton
						key={key + "-selector"}
						className={`btn__language${
							radioValue === key ? "_checked" : ""
						} text-primary bg-transparent border-0 p-0 me-2`}
						id={`langToggle-${key}`}
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
