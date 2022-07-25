export default function validateForm(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "Please enter your first name.";
  }

  if (!values.lastName) {
    errors.lastName = "Please enter your last name.";
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.displayName && values.displayName.length < 5) {
    errors.displayName = "Use at least 5 characters.";
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  } else if (values.password.length < 6) {
    errors.password = "The password is too short.";
  } else if (!/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(values.password)) {
    errors.password = "The password is too weak.";
  }

  return errors;
}
