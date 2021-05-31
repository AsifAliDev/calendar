import { userConstants } from "../constants";
const initialState = {
  loggedIn: false,
  user: null,
  loader: false,
  errorAlert: false,
  buttonName: "Login",
};

export function reg(state = initialState, action) {
  switch (action.type) {
    case userConstants.REG_REQUEST:
      return {
        ...state,
        loggedIn: false,
        user: action.payload,
        loader: true,
        buttonName: "processing...",
        errorAlert: false,
      };
    case userConstants.REG_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        loader: false,
        errorAlert: false,
      };
    case userConstants.REG_FAILURE:
      return {
        ...state,
        loggedIn: false,
        user: null,
        loader: false,
        errorAlert: true,
      };
    default:
      return state;
  }
}
