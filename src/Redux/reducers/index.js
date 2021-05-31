import { combineReducers } from "redux";
import { login } from "./login";
import { reg } from "./reg.reducer";
import { createBooking } from "./creatBooking.reducer";
import { getBooking } from "./getBookingReducer";

const rootReducer = combineReducers({
  login,
  reg,
  createBooking,
  getBooking,
});

export default rootReducer;
