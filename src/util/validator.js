import validator from "validator";

export const mobile = (phone) => {
  let isValidMobile = validator.isMobilePhone(phone, ["en-IN"]);
  return isValidMobile;
};
export const Email = (email) => {
  let isValidEmail = validator.isEmail(email);
  return isValidEmail;
};
export const password = (password) => {
  let isValidPassword = validator.isStrongPassword(password);
  return isValidPassword;
};
