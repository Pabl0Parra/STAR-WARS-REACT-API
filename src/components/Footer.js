import "../styles/Footer.css";
import SocialNetworks from "../components/SocialNetworks";

import vader_2 from "../assets/vader_2.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={vader_2} alt="" className="footer_img" />
      <div className="social-section">
        <p className="social_text">FOLLOW STAR WARS:</p>
        <SocialNetworks />
      </div>
      <div className="info-section">
        <p className="copy">TM & © Lucasfilm Ltd. All Rights Reserved</p>
        <ul className="legal">
          <li className="legal_link">
            <a href="#!">Terms of Use</a>
          </li>
          <li className="legal_link">
            <a href="#!">Additional Content Information</a>
          </li>
          <li className="legal_link">
            <a href="#!">Privacy Policy</a>
          </li>
          <li className="legal_link">
            <a href="#!">Children's Online Privacy Policy</a>
          </li>
          <li className="legal_link">
            <a href="#!">Your California Privacy Rights</a>
          </li>
          <li className="legal_link">
            <a href="#!">Star Wars at shopDisney</a>
          </li>
          <li className="legal_link">
            <a href="#!">Star Wars Helpdesk</a>
          </li>
          <li className="legal_link">
            <a href="#!">Interest-Based Ads</a>
          </li>
          <li className="legal_link">
            <a href="#!">Do Not Sell My Personal Information</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
