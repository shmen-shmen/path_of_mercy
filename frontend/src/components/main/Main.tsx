import { Fragment } from "react";
import NavbarComponent from "./NavbarComponent";
import { Outlet } from "react-router-dom";

export const TheyNeedHelp = () => {
	return (
		<Fragment>
			<h2>TheyNeedHelp</h2>
		</Fragment>
	);
};
export const WeHelpedThem = () => {
	return (
		<Fragment>
			<h2>WeHelpedThem</h2>
		</Fragment>
	);
};
export const AboutUs = () => {
	return (
		<Fragment>
			<h2>AboutUs</h2>
		</Fragment>
	);
};

export function Main() {
	return (
		<main>
			<NavbarComponent></NavbarComponent>
			<div className="container">
				<Outlet></Outlet>
			</div>
		</main>
	);
}
