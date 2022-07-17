const Input = ({ type, id, text }) => {
  return (
    <input
      type={type}
      name={id}
      id={id}
      aria-required="true"
      className="popup_input"
      placeholder={text}
    />
  );
};

export default Input;
