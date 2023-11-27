import { useContext, useEffect, useState } from "react";
import { CustomerContext } from "../store/CustomerStore";
import GridContainer from "../components/GridContainer";
import Toast from "../components/Toast";
import Modal from "../components/Modal";
import TableContainer from "../components/TableContainer";
import Button from "../components/Button";

export default function IndexPage() {
	const {
		items,
		isLoading,
		isAddingSuccess,
		handleDeleteUser,
		isEditingSuccess,
		error,
	} = useContext(CustomerContext);
	const [showToast, setShowToast] = useState(false);
	const [tableStyle, setTableStyle] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [editInfo, setEditInfo] = useState({});

	useEffect(() => {
		if (isAddingSuccess || isEditingSuccess || error) {
			setShowToast(true);
			const timeoutId = setTimeout(() => {
				setShowToast(false);
			}, 2000);

			return () => clearTimeout(timeoutId);
		}
	}, [isAddingSuccess, isEditingSuccess, error]);

	const changeDisplayStyle = () => {
		setTableStyle((prev) => !prev);
	};

	const openModal = () => setIsVisible(true);
	const closeModal = () => {
		setIsVisible(false);
		setEditInfo({});
	};

	const handleEditCustomer = (data) => {
		setEditInfo(data);
		openModal();
	};

	const getButtonStyle = (isActive) =>
		`text-xl ${!isActive ? "text-black" : "text-slate-400"}`;

	return (
		<>
			<Modal isOpen={isVisible} editInfo={editInfo} closeModal={closeModal} />

			<div className="w-full py-2">
				<h1 className="font-bold text-xl mb-2">Customer Information</h1>
				<div className="w-full flex flex-col lg:flex-row justify-between items-start py-2">
					<p className="lg:w-96 text-slate-700 text-sm">
						Your list of customer appear here. To add a new customer, click on
						the Add New Customer button.
					</p>

					<Button
						onClick={openModal}
						style={
							"rounded-full w-35 bg-purple-600 hover:bg-purple-700 px-5 py-2 text-white transition-all mt-2 lg:mt-0"
						}
						label="Add New Customer"
						ariaLabel="add-new-customer"
					/>
				</div>

				<div className="w-full text-end flex justify-end items-center mt-2">
					<button className="mr-2" onClick={changeDisplayStyle}>
						<span className={getButtonStyle(!tableStyle)}>
							<ion-icon name="grid-sharp"></ion-icon>
						</span>
					</button>

					<button onClick={changeDisplayStyle}>
						<span className={getButtonStyle(tableStyle)}>
							<ion-icon name="menu-sharp"></ion-icon>
						</span>
					</button>
				</div>

				{items && items.length > 0 ? (
					tableStyle ? (
						<TableContainer
							items={items}
							tableHead={["Name", "Email", "Phone", "Action"]}
							isLoading={isLoading}
							onEdit={handleEditCustomer}
							onDelete={handleDeleteUser}
						/>
					) : (
						<GridContainer
							items={items}
							isLoading={isLoading}
							onEdit={handleEditCustomer}
							onDelete={handleDeleteUser}
						/>
					)
				) : (
					<p className="text-center text-2xl font-semibold">
						No items available
					</p>
				)}

				{showToast && (
					<Toast
						isError={error ? true : false}
						icon={error ? "alert-circle-sharp" : "checkmark-sharp"}
						message={
							isAddingSuccess
								? "Successfully adding customer"
								: isEditingSuccess
								? "Changes saved!"
								: error
								? error
								: null
						}
					/>
				)}
			</div>
		</>
	);
}
