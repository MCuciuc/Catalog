import React, { useState } from "react";
import CarCard from "./CarCard";
import cars from "../data/cars";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import "./CarList.css";

function CarList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const filteredCars = cars.filter((car) => {
    const priceValue = parseInt(car.price.replace(/[^\d]/g, "")); 

    let priceMatch = true;
    if (priceFilter === "low") priceMatch = priceValue < 15000;
    if (priceFilter === "mid") priceMatch = priceValue >= 15000 && priceValue <= 40000;
    if (priceFilter === "high") priceMatch = priceValue > 40000;

    let yearMatch = yearFilter ? car.year.toString() === yearFilter : true;

    return (
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      priceMatch &&
      yearMatch
    );
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters setYearFilter={setYearFilter} setPriceFilter={setPriceFilter} />
      </div>

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
