export default function ValidateInputs(name, value, errors) {
  let error = "";

  if (name === "firstName" || name === "lastName") {
    if (!value.trim()) {
      error = "Please enter your name without spaces.";
    }
  }

  if (name === "email") {
    if (!value) {
      error = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      error = "Please enter a valid email address.";
    }
  }

  if (name === "displayName") {
    if (value && value.length < 5) {
      error = "Can't be less than 5 characters.";
    }
  }

  if (name === "password") {
    if (!value) {
      error = "Please enter a password.";
    } else if (value.length < 6) {
      error = "Can't be less than 6 characters.";
    } else if (!/^(?:\d+[a-z]|[a-z]+\d)[a-z0-9]*$/i.test(value)) {
      error = "The password is too weak.";
    }
  }

  return { ...errors, [name]: error };
}
