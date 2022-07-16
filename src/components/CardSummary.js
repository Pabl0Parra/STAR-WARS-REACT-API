import "../styles/CardSummary.css";

export default function CardSummary({
  data,
  changeSlide,
  current,
  transition,
}) {
  return (
    <div className="summary">
      {data.map((card, index) => {
        return (
          <span
            className="summary_card"
            key={index}
            onClick={() => changeSlide(index)}
          >
            <div
              className={
                current === index && transition !== null
                  ? `summary_progress summary_progress--${card.color} summary_progress--animated`
                  : current === index && transition == null
                  ? `summary_progress summary_progress--${card.color} summary_progress--selected`
                  : `summary_progress summary_progress--${card.color}`
              }
            ></div>
            <img
              src={card.image}
              alt=""
              className={
                current === index ? "summary_bg summary_bg--blur" : "summary_bg"
              }
            />
            <span className="summary_title">{card.title}</span>
          </span>
        );
      })}
    </div>
  );
}
