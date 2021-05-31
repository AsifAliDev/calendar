import { userConstants } from "../constants";

/*************************Register*************************************/
export const register = (data) => (dispatch) => {
  localStorage.setItem("loginData", JSON.stringify(data));

  dispatch({
    type: userConstants.REG_SUCCESS,
    payload: {
      error: false,
      message: "Successfully created",
    },
  });
};

/* **************************Login***************************** */
export const login = (loginData) => (dispatch) => {
  let localSorageDate = JSON.parse(localStorage.getItem("loginData"));
  if (localSorageDate) {
    if (
      localSorageDate.email === loginData.email &&
      localSorageDate.password === loginData.password
    ) {
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: {
          error: false,
          message: "Successfully Login",
        },
      });
    } else {
      alert("Please check your Email/Password");
    }
  } else {
    alert("Email/password doesn't exist");
  }
};

///////////////////////Creat booking/////////////////////////////
export const creatBooking = (data) => (dispatch) => {
  localStorage.setItem("booking", JSON.stringify(data));

  dispatch({
    type: userConstants.CREAT_BOOKING_SUCCESS,
    payload: {
      error: false,
      message: "Successfully created",
      data,
    },
  });
};

///////////////////////////////getBooking////////////////////
export const getBooking = () => (dispatch) => {
  let data = JSON.parse(localStorage.getItem("booking"));
  if (data) {
    dispatch({
      type: userConstants.GET_BOOKING_SUCCESS,
      payload: {
        error: false,
        message: "Successfully fetch",
        data,
      },
    });
  } else {
    dispatch({
      type: userConstants.GET_BOOKING_SUCCESS,
      payload: {
        error: false,
        message: "Successfully created",
        data: [
          { time: "10:00", data: "" },
          { time: "10:30", data: "" },
          { time: "11:00", data: "" },
          { time: "11:30", data: "" },
          { time: "12:00", data: "" },
          { time: "12:30", data: "" },
          { time: "13:00", data: "" },
          { time: "13:30", data: "" },
          { time: "14:00", data: "" },
          { time: "14:30", data: "" },
        ],
      },
    });
  }

  dispatch({
    type: userConstants.CREAT_BOOKING_SUCCESS,
    payload: {
      error: false,
      message: "Successfully created",
      data,
    },
  });
};
