import React from "react";
import CarCard from "../components/CarCard";
import cars from "../data/cars";

function CarList() {
  return (
    <div>
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