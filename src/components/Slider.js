import { useState, useEffect, useRef } from "react";
import { SliderData } from "../variables/SliderData";
import { Link } from "react-router-dom";
import CardSummary from "./CardSummary";
import Button from "./Button";
import "../styles/Slider.css";

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const transitionSlide = useRef(0);

  const cardSlide = (slide) => {
    setCurrent(slide);
    clearInterval(transitionSlide.current);
    transitionSlide.current = null;
  };

  const prevSlide = () => {
    setCurrent((current) =>
      current === 0 ? SliderData.length - 1 : current - 1
    );
    clearInterval(transitionSlide.current);
    transitionSlide.current = null;
  };

  const nextSlide = () => {
    setCurrent((current) =>
      current === SliderData.length - 1 ? 0 : current + 1
    );
    clearInterval(transitionSlide.current);
    transitionSlide.current = null;
  };

  useEffect(() => {
    transitionSlide.current = setInterval(() => {
      setCurrent((current) =>
        current === SliderData.length - 1 ? 0 : current + 1
      );
    }, 6000);
    return () => clearInterval(transitionSlide.current);
  }, []);

  useEffect(() => {
    const Slides = document.querySelectorAll(".slider_item");
    for (let img of Slides) {
      img.style.transform = `translateX(-${current}00%)`;
    }
  }, [current]);

  return (
    <section className="slider" id="slider">
      <Button
        name={"slider_button slider_button--left"}
        open={prevSlide}
        text={<ion-icon name="chevron-back-outline"></ion-icon>}
      />
      <Button
        name={"slider_button slider_button--right"}
        open={nextSlide}
        text={<ion-icon name="chevron-forward-outline"></ion-icon>}
      />
      <ul className="slider_container">
        {SliderData.map((slide, index) => {
          return (
            <li
              key={index}
              className={`slider_item slider_item--${slide.theme}`}
            >
              <img
                src={slide.image}
                alt="StarWars content"
                className={"slider_img"}
              />
              <div className={`slider_info slider_info--${slide.color}`}>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                <Link to={slide.link}>{slide.button}</Link>
              </div>
            </li>
          );
        })}
      </ul>
      <CardSummary
        data={SliderData}
        changeSlide={cardSlide}
        current={current}
        interval={transitionSlide.current}
      />
    </section>
  );
}
