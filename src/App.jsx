import { useState, useEffect } from "react";
import style from "./App.module.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const initState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const storagedFeedback = localStorage.getItem("feedback");

    if (storagedFeedback !== null) {
      return JSON.parse(storagedFeedback);
    }

    return initState;
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    document.title = totalFeedback
      ? `Positive feedback ${positiveFeedback}%`
      : "No feedback yet";
  }, [positiveFeedback, totalFeedback]);

  function updateFeedback(feedbackType) {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  }

  function resetFeedback() {
    setFeedback(initState);
  }

  return (
    <div className={style.container}>
      <Description />
      <Options
        options={Object.keys(feedback)}
        setter={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;