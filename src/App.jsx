import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import CustomerContextProvider from "./store/CustomerStore";
import IndexPage from "./pages/IndexPage";
import ErrorPage from "./pages/ErrorPage";
import ViewPage from "./pages/ViewPage";

const router = createBrowserRouter([
	{ path: "/", element: <IndexPage key="index" /> },
	{ path: "/view-customer/:id", element: <ViewPage key="view" /> },
	{ path: "*", element: <ErrorPage key="error" /> },
]);

function App() {
	return (
		<main>
			<CustomerContextProvider>
				<RouterProvider router={router} />
			</CustomerContextProvider>
		</main>
	);
}

export default App;
