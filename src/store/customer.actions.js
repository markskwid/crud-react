import { customerActions } from "./customer.slice";
import { addCustomer, deleteUser, editUser, fetchData } from "../util/apiUtil";

export const fetchCustomerData = () => {
  return async (dispatch) => {
    try {
      const response = await fetchData();
      dispatch(
        customerActions.FETCH_SUCCESS({
          items: response,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        customerActions.FETCH_DATA_ERROR({
          error: "Error getting data",
        })
      );
    }
  };
};

export const addCustomerInfo = (customerData) => {
  return async (dispatch) => {
    try {
      const response = await addCustomer(customerData);
      dispatch(
        customerActions.ADD_CUSTOMER({
          data: response.data,
          success: true,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        customerActions.ADD_CUSTOMER({
          success: false,
          error: "Error adding data",
        })
      );
    }
  };
};

export const updateUserInfo = (data) => {
  return async (dispatch) => {
    const { id } = data;
    try {
      const response = await editUser(id, data);
      dispatch(
        customerActions.EDIT_CUSTOMER({
          id,
          newData: response.data,
          success: true,
        })
      );
    } catch (error) {
      dispatch(
        customerActions.EDIT_CUSTOMER({
          success: false,
          error: "Error updating user",
        })
      );
      console.log(error);
    }
  };
};

export const deleteUserInfo = (id) => {
  return async (dispatch) => {
    try {
      await deleteUser(id);
      dispatch(
        customerActions.DELETE_CUSTOMER({
          id,
          success: true,
        })
      );
    } catch (error) {
      dispatch(
        customerActions.DELETE_CUSTOMER({
          error: "Error deleting data",
          success: false,
        })
      );
      console.log(error);
    }
  };
};
