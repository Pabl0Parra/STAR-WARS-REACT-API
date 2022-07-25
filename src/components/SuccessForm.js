import "../styles/SuccessForm.css";

export default function SuccessForm({ text }) {
  return (
    <div className="success_container">
      <h1 className="success_title">{text}</h1>
    </div>
  );
}
