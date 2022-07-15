import "../styles/SearchForm.css";
import Button from "../components/Button";

export default function SearchForm() {
  const handleOpenLogin = () => {
    console.log("openLogin");
  };

  const handleOpenSignup = () => {
    console.log("openSignup");
  };
  return (
    <div>
      <form className="form">
        <input
          type="text"
          placeholder="Search Star Wars"
          className="form_input"
        />
        <button
          arial-label="search-icon"
          onClick={(e) => e.preventDefault()}
          className="form_button"
        >
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </form>
      <div className="button-group">
        <Button open={handleOpenLogin} text={"log in"} name={"login_button"} />
        <span></span>
        <Button
          open={handleOpenSignup}
          text={"sign up"}
          name={"signup_button"}
        />
      </div>
    </div>
  );
}
