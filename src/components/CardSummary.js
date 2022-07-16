import "../styles/CardSummary.css";

export default function CardSummary({ data, changeSlide, current }) {
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
                current === index
                  ? `summary_progress summary_progress--${card.color} summary_progress--active`
                  : `summary_progress summary_progress--${card.color}`
              }
            ></div>
            <img src={card.image} alt="" className="summary_bg" />
            <span className="summary_title">{card.title}</span>
          </span>
        );
      })}
    </div>
  );
}
