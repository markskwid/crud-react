import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import CustomerContextProvider from "./store/CustomerStore";
import IndexPage from "./pages/IndexPage";
import ErrorPage from "./pages/ErrorPage";
import ViewPage from "./pages/ViewPage";
import { useEffect } from "react";
import { fetchCustomerData } from "./store/customer.actions";

const router = createBrowserRouter([
	{ path: "/", element: <IndexPage key="index" /> },
	{ path: "/view-customer/:id", element: <ViewPage key="view" /> },
	{ path: "*", element: <ErrorPage key="error" /> },
]);

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCustomerData());
	}, [dispatch]);

	return (
		<main>
			<CustomerContextProvider>
				<RouterProvider router={router} />
			</CustomerContextProvider>
		</main>
	);
}

export default App;
