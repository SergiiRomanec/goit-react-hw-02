import style from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div className={style.container}>
      <p className={style.fbText}>Good: {good}</p>
      <p className={style.fbText}>Neutral: {neutral}</p>
      <p className={style.fbText}>Bad: {bad}</p>
      <p className={style.fbText}>Total: {total}</p>
      <p className={style.fbText}>Positive: {positive}</p>
    </div>
  );
}

export default Feedback;