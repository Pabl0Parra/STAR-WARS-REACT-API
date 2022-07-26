import "../styles/SocialNetworks.css";

export default function SocialNetworks() {
  return (
    <div className="social">
      <ul className="social_links">
        <li className="social_icon">
          <a href="#!">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="social_icon">
          <a href="#!">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="social_icon">
          <a href="#!">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social_icon">
          <a href="#!">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
      </ul>
      <a href="#!" className="social_kids">
        KIDS
      </a>
    </div>
  );
}
