export const validateForm = (formData, type) => {
  const formErrors = {};

  if (type === "signup") {
    if (!formData.firstname || formData.firstname.length < 1) {
      formErrors.firstname = "First name is required";
    }

    if (!formData.lastname || formData.lastname.length < 1) {
      formErrors.lastname = "Last name is required";
    }

    if (
      !formData.email ||
      /^[a-z0-9.]+@[a-z0-9]+.[a-z]+$/.test(formData.email) === false
    ) {
      formErrors.email = "Provide a valid email";
    }
  }

  if (!formData.username || formData.username.length < 4) {
    formErrors.username = "Username must be atleast 4 characters long";
  }

  if (!formData.password || formData.password.length < 8) {
    formErrors.password = "Password must be atleast 8 characters long";
  }

  if (Object.keys(formErrors).length !== 0) {
    return formErrors;
  }

  return null;
};
