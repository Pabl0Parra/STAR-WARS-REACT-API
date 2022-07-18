import { useState } from "react";

const useValidation = (validateInputs) => {
  const [content, setContent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    displayName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    displayName: "",
    password: "",
  });

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
    setErrors(validateInputs(name, value, errors));
  };

  return {
    handleBlur,
    errors,
  };
};

export default useValidation;
