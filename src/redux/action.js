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
    payload: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: error,
  };
};

export const authLogin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };

    if (email && password) {
      dispatch(
        authSuccess({
          email: email,
          password: password,
        })
      );
      console.log("success login");
    } else {
      dispatch(authFail());
      console.log("login failed");
    }
    // axios
    //   .post("url", authData)
    //   .then((response) => {
    //     console.log(response);
    //     dispatch(authSuccess(response.data));
    //   })
    //   .catch((error) => {
    //     console.log("Error", error.message);
    //     dispatch(authFail());
    //   });
  };
};

export const authSignUp = (name, email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };

    if (email && password) {
      dispatch(
        authSuccess({
          name: name,
          email: email,
          password: password,
        })
      );
      console.log("success Signup");
    } else {
      dispatch(authFail());
      console.log("Signup failed");
    }
    // axios
    //   .post("url", authData)
    //   .then((response) => {
    //     console.log(response);
    //     dispatch(authSuccess(response.data));
    //   })
    //   .catch((error) => {
    //     console.log("Error", error.message);
    //     dispatch(authFail());
    //   });
  };
};