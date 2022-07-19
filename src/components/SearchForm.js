import "../styles/SearchForm.css";
import Button from "./Button";

export default function SearchForm({ openLoginPopup, openRegisterPopup }) {
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
        <Button
          open={() => openLoginPopup(true)}
          text={"LOG IN"}
          name={"login_button"}
        />
        <span>{"/ /"}</span>
        <Button
          open={() => openRegisterPopup(true)}
          text={"SIGN UP"}
          name={"signup_button"}
        />
      </div>
    </div>
  );
}
