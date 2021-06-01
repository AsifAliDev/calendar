import validator from "validator";

export const Phone = (phone) => {
  let isValidMobile = validator.isMobilePhone(phone, ["en-IN"]);
  return isValidMobile;
};
export const Email = (email) => {
  let isValidEmail = validator.isEmail(email);
  return isValidEmail;
};
export const Password = (password) => {
  let isValidPassword = validator.isStrongPassword(password);
  return isValidPassword;
};

export const IsString = (data) => {
  let isValidstring = validator.isAlpha(data, ["en-US"]);
  return isValidstring;
};
