import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page.tsx";

import { News } from "./components/main/News.tsx";

import {
	WeHelpedThem,
	TheyNeedHelp,
	AboutUs,
} from "./components/main/Main.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/News",
				element: <News />,
			},
			{
				path: "/WeHelpedThem",
				element: <WeHelpedThem />,
			},
			{
				path: "/TheyNeedHelp",
				element: <TheyNeedHelp />,
			},
			{
				path: "/AboutUs",
				element: <AboutUs />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
