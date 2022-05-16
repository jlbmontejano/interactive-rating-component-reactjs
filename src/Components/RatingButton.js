import React from "react";
import "./RatingButton.css";

const RatingButton = ({ value, setSelection }) => {
  return (
    <>
      <input type="radio" name="rating" id={value} value={value} onChange={()=>{setSelection(value)}} />
      <label htmlFor={value}>{value}</label>
    </>
  );
};
export default RatingButton;
