const Input = ({ type, id, text, validation, error }) => {
  return (
    <>
      <input
        type={type}
        name={id}
        id={id}
        aria-required="true"
        maxLength="60"
        className={error ? "popup_input popup_input--error" : "popup_input"}
        placeholder={text}
        onBlur={validation}
      />
      <p className="popup_errors">{error}</p>
    </>
  );
};

export default Input;
