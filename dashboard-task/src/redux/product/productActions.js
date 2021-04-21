import axios from "axios";
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./productTypes";

export const getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

export const getProductSuccess = (result) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: result,
  };
};

export const getProductError = (error) => {
  return {
    type: GET_PRODUCT_ERROR,
    payload: error,
  };
};

export const handleGetProduct = () => {
  return (dispatch) => {
    dispatch(getProductRequest());
    axios
      .get("https://api-test.innoloft.com/product/6781/")
      .then((res) => {
        dispatch(getProductSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProductError(err));
      });
  };
};
