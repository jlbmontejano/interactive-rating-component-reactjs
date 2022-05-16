import React from "react";
import "./StarCircle.css";

const StarCircle = () => {
    return (
        <div>
            <span className="circle" />
            <img src={process.env.PUBLIC_URL + "/images/icon-star.svg"} alt='icon-star' />
        </div>
    );
}

export default StarCircle;