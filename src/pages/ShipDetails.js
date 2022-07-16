import { useState, useEffect } from "react";

import defaultImg from "../assets/default.jpg";
import "../styles/ShipDetails.css";

export default function ShipDetails({ info, id }) {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
  } = info;

  const ImgURL = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  const [imgSource, setImgSource] = useState(ImgURL);
  const onError = () => setImgSource(defaultImg);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="ship_details">
        <div className="ship_details_img">
          <img
            src={imgSource ? imgSource : defaultImg}
            onError={onError}
            alt=""
            className="ship_img"
          />
        </div>
        <div className="ship_details_bar"></div>
        <div className="ship_info">
          <h3>{name.toUpperCase()}</h3>
          <p>
            The Imperial Forces -- under orders from cruel Darth Vader -- hold
            Princess Leia hostage, in their efforts to quell the rebellion
            against the Galactic Empire. Luke Skywalker and Han Solo, captain of
            the Millennium Falcon, work together with the companionable droid
            duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel
            Alliance, and restore freedom and justice to the Galaxy.
          </p>
          <div className="info_box">
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Cost in credits: {cost_in_credits}</p>
            <p>Length: {length}</p>
            <p>Atmospheric Speed: {max_atmosphering_speed}</p>
            <p>Crew: {crew}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
