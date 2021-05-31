import { userConstants } from "../constants";
const initialState = {
  loggedIn: false,
  user: null,
  loader: false,
  errorAlert: false,
  buttonName: "Login",
};

export function login(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggedIn: false,
        user: action.payload,
        loader: true,
        buttonName: "processing...",
        errorAlert: false,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        loader: false,
        errorAlert: false,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        user: null,
        loader: false,
        errorAlert: true,
      };
    case userConstants.CLEAR:
      return { loader: false };
    default:
      return state;
  }
}
