import React from "react";
import CarCard from "./CarCard";
import cars from "../data/cars";

function CarList() {
  return (
    <div>
      {cars.map((car) => (
        <CarCard key={car.id} name={car.name} year={car.year} price={car.price} />
      ))}
    </div>
  );
}

export default CarList;
