import React from "react";
import "./CarCard.css";

function CarCard({ name, year, price }) {
  return (
    <div className="car-card">
      <h3>{name}</h3>
      <p>An: {year}</p>
      <p>Preț: {price}</p>
    </div>
  );
}

export default CarCard;
