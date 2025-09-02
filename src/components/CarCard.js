import React, { useState } from "react";
import "./CarCard.css";

function CarCard({ name, year, price, image, details }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  return (
    <div
      className={`car-card flip-card${flipped ? " flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={image}
            alt={name}
            style={{
              width: "150px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "8px",
              display: "block",
              margin: "0 auto",
              cursor: "pointer"
            }}
          />
        </div>
        <div className="flip-card-back">
          <h3>{name}</h3>
          <p>An: {year}</p>
          <p>Preț: {price}</p>
          {details && (
            <div className="car-details">
              <p>{details}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarCard;