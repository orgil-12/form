export const validateStepOne = (form) => {
  let isValid = true;
  let newErrors = {
    firstname: "",
    lastname: "",
    username: "",
  };
  if (form.firstname === "") {
    isValid = false;
    newErrors.firstname = "This field cannot be empty";
  }
  if (!form.firstname.match("[A-Za-z]")) {
    isValid = false;
    newErrors.firstname =
      "First name cannot contain special characters or numbers.";
  }
  if (form.lastname === "") {
    isValid = false;
    newErrors.lastname = "This field cannot be empty.";
  }
  if (form.username === "") {
    isValid = false;
    newErrors.username = "This field cannot be empty.";
  }
  return { isValid, newErrors };
};

export const validateStepTwo = (form) => {
  let isValid = true;
  let newErrors = {
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  console.log(newErrors);
  if (!form.email.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")) {
    isValid = false;
    newErrors.email = "Please provide a valid email address.";
  }
  if (!form.phoneNumber.match("[0-9]")) {
    isValid = false;
    newErrors.phoneNumber = "Please enter a valid phone number.";
  }
  if (form.password.match("(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}")) {
    isValid = false;
    newErrors.password = "Password must include an upper letter and numbers.";
  }
  if (form.password !== form.confirmPassword) {
    isValid = false;
    newErrors.confirmPassword = "Passwords do not match. Please try again.";
  }
  return { isValid, newErrors };
};
