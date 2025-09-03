import React, { useState } from "react";
import CarCard from "./CarCard";
import cars from "../data/cars";
import SearchBar from "./SearchBar";
import "./CarList.css";

function CarList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="car-grid">
        {filteredCars.map((car) => (
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
    </div>
  );
}

export default CarList;
