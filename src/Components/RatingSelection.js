import React from "react";
import RatingButton from "./RatingButton";
import "./RatingSelection.css";

const RatingSelection = ({ setSelection }) => {
  return (
    <div className="rating-selection">
      {[
        ...[1,2,3,4,5]
          .map((value) => (
            <RatingButton value={value} key={`rating-${value}`} setSelection={setSelection}>
              {value}
            </RatingButton>
          )),
      ]}
    </div>
  );
};

export default RatingSelection;
