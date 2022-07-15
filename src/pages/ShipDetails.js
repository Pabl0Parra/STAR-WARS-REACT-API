import { useState } from "react";
import Footer from "../components/Footer";
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

  return (
    <div>
      <div>
        <img
          src={imgSource ? imgSource : defaultImg}
          onError={onError}
          alt=""
          className="ship_img"
        />

        <h3>{name}</h3>
        <p>Model: {model}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Cost in credits: {cost_in_credits}</p>
        <p>Length: {length}</p>
        <p>Atmospheric Speed: {max_atmosphering_speed}</p>
        <p>Crew: {crew}</p>
      </div>
      <Footer />
    </div>
  );
}
