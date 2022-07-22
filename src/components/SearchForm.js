import "../styles/SearchForm.css";
import Button from "./Button";

export default function SearchForm({
  openLoginPopup,
  openRegisterPopup,
  loggedIn,
  setLoggedIn,
}) {
  return (
    <div>
      <form className="search_form">
        <input
          type="text"
          placeholder="Search Star Wars"
          className="search_input"
        />
        <button
          arial-label="search-icon"
          onClick={(e) => e.preventDefault()}
          className="search_button"
        >
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </form>
      {!loggedIn.login ? (
        <div className="button-group">
          <Button
            open={() => openLoginPopup(true)}
            text={"LOG IN"}
            name={"login_button"}
          />
          <span>{"//"}</span>
          <Button
            open={() => openRegisterPopup(true)}
            text={"SIGN UP"}
            name={"signup_button"}
          />
        </div>
      ) : (
        <div className="login_status">
          <div className="login_user">
            <ion-icon name="person-circle-outline"></ion-icon>
            <span>
              <ion-icon name="person-circle-outline"></ion-icon>
            </span>
            <span>{loggedIn.display}</span>
          </div>
          <Button
            open={() => setLoggedIn({ display: "", login: false })}
            text={"LOG OUT"}
            name={"logout_button"}
          />
        </div>
      )}
    </div>
  );
}
