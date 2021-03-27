// export const BALANCE = "balance"

// export default function getBalance(response){
//     return {
//         type : BALANCE,
//         balance : response.data.wordLimit,
//     }
// }
import * as actionTypes from "./type";
import axios from "axios";

export const IS_LOGIN = "IS_LOGIN";
export const AUTH_MODAL = "AUTH_MODAL";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };
    axios
      .post("url", authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess());
        // setName("");
        // setURL("");
        // setCaption("");

        // setMessage("SUCCESSFULLY POSTED");
        // setTimeout(() => {
        //   setMessage("");
        // }, 2000);
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch(authFail());
      });
  };
};
