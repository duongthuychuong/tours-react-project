import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTours }) => {
  const [readMore, setReadmore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
      </footer>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}{" "}
        <button onClick={() => setReadmore(!readMore)}>
          {readMore ? "Read less" : "Read more"}
        </button>
      </p>

      <button
        onClick={() => {
          removeTours(id);
        }}
        className="delete-btn"
      >
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
