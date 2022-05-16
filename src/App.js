import React, { useState } from "react";
import StarCircle from "./Components/StarCircle";
import RatingSelection from "./Components/RatingSelection";
import FinalRating from "./Components/FinalRating";

/* Styling */
import "./App.css";

const App = () => {
  const [selection, setSelection] = useState();
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="main-grid">
      {submitted ? (
        <>
          <img
            src={process.env.PUBLIC_URL + "/images/illustration-thank-you.svg"}
            alt="thank-you" className="thank-you"
          />
          <FinalRating selection={selection} />
          <h1 className="thank-you">Thank You!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </>
      ) : (
        <>
          <StarCircle />
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <RatingSelection setSelection={setSelection} />
          <input
            type="submit"
            disabled={!selection}
            onClick={() => setSubmitted(true)}
          />
        </>
      )}
    </div>
  );
};

export default App;
