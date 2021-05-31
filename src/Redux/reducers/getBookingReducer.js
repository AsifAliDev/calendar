import { userConstants } from "../constants";
const initialState = {
  loggedIn: false,
  booking: null,
  loader: false,
  errorAlert: false,
};

export function getBooking(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_BOOKING_REQUEST:
      return {
        ...state,
        loggedIn: false,
        booking: action.payload,
        loader: true,
        errorAlert: false,
      };
    case userConstants.GET_BOOKING_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        booking: action.payload,
        loader: false,
        errorAlert: false,
      };
    case userConstants.GET_BOOKING_FAILURE:
      return {
        ...state,
        loggedIn: false,
        booking: null,
        loader: false,
        errorAlert: true,
      };
    case userConstants.CLEAR:
      return { loader: false };
    default:
      return state;
  }
}
