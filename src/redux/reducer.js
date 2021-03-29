// import BALANCE from './action'

// const prevState = {
//     balance : 0,
//     error : false
// }

// export default function reducer(  state = prevState, action ){
//         switch(action.type){
//             case BALANCE :
//                  return {
//                      ...state.balance,
//                      balance : action.balance
//                  }
//             default :
//                  return state
//         }
// }

import IS_LOGIN from "./type";
import * as actionTypes from "./action";

const initailState = {
  login: false,
  auth_mdoal: false,
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOGIN:
      return {
        ...state,
        login: action.login,
      };
    case actionTypes.AUTH_MODAL:
      return {
        ...state,
        auth_mdoal: action.auth_mdoal,
      };
    default:
      return state;
  }
};

export default reducer;
