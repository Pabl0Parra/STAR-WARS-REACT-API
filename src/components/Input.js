const Input = ({ type, id, text, validation, error }) => {
  return (
    <>
      <input
        type={type}
        name={id}
        id={id}
        aria-required="true"
        maxLength="60"
        className={error ? "input input--error" : "input"}
        placeholder={text}
        onBlur={validation}
      />
      <p className="input_errors">{error}</p>
    </>
  );
};

export default Input;
