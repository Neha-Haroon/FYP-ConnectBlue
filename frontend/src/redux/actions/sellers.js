import axios from "axios";
import { server } from "../../server";

// get all sellers --- admin
export const getAllSellers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllSellersRequest",
    });

    const { data } = await axios.get(`${server}/shop/admin-all-sellers`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllSellersSuccess",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "getAllSellerFailed",
      //   payload: error.response.data.message,
    });
  }
};

// seller update information
export const updateSellerInformation =
  (
    name,
    email,
    password,
    avatar,
    gender,
    cnicNumber,
    address,
    phoneNumber,
    area
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "updateSellerInfoRequest",
      });

      const { data } = await axios.put(
        `${server}/shop/update-seller-info`,
        {
          name,
          email,
          password,
          avatar,
          gender,
          cnicNumber,
          address,
          phoneNumber,
          area,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      dispatch({
        type: "updateSellerInfoSuccess",
        payload: data.seller,
      });
    } catch (error) {
      dispatch({
        type: "updateSellerInfoFailed",
        payload: error.response.data.message,
      });
    }
  };

// update seller area
export const updateSellerArea = (name) => async (dispatch) => {
  try {
    dispatch({
      type: "updateSellerAreaRequest",
    });
    console.log("error1");
    const { data } = await axios.put(
      `${server}/shop/update-seller-areas`,
      {
        name,
      },
      { withCredentials: true }
    );
    console.log("error 2");
    dispatch({
      type: "updateSellerAreaSuccess",
      payload: {
        successMessage: "Seller area updated succesfully!",
        seller: data.seller,
      },
    });
  } catch (error) {
    console.log("error");
    dispatch({
      type: "updateSellerAreaFailed",
      payload: error.response.data.message,
    });
  }
};

// delete seller area
export const deleteSellerArea = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteSellerAreaRequest",
    });

    const { data } = await axios.delete(
      `${server}/seller/delete-seller-area/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "deleteSellerAreaSuccess",
      payload: {
        successMessage: "Seller deleted successfully!",
        seller: data.seller,
      },
    });
  } catch (error) {
    dispatch({
      type: "deleteSellerAreaFailed",
      payload: error.response.data.message,
    });
  }
};
export const getAllWorkersOfAdmin = () => async (dispatch) => {
  try {
    dispatch({
      type: "adminAllWorkersRequest",
    });

    const { data } = await axios.get(`${server}/order/admin-all-workers`, {
      withCredentials: true,
    });

    dispatch({
      type: "adminAllWorkersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "adminAllWorkersFailed",
      payload: error.response.data.message,
    });
  }
};