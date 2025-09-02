import React from "react";
import CarCard from "./CarCard";
import cars from "../data/cars";
import "./CarList.css";

function CarList() {
  return (
    <div className="car-grid">
      {cars.map((car) => (
        <CarCard
          key={car.id}
          name={car.name}
          year={car.year}
          price={car.price}
          image={car.image}
          details={car.details}
        />
      ))}
    </div>
  );
}

export default CarList;