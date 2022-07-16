import { useState, useEffect } from "react";

import { SliderData } from "../variables/SliderData";

import "../styles/Slider.css";

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const Slides = document.querySelectorAll(".slider_img");
    for (let img of Slides) {
      img.style.transform = `translateX(-${current}00%)`;
    }
  }, [current]);

  return (
    <section className="slider">
      <button className="slider_button slider_button--left" onClick={prevSlide}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button
        className="slider_button slider_button--right"
        onClick={nextSlide}
      >
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
      <ul className="slider_container">
        {SliderData.map((slide, index) => {
          return (
            <li key={index} className={`slider_img slider_img--${index}`}>
              <img src={slide.image} alt="StarWars content" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
