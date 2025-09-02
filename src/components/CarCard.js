
import React, { useEffect, useState } from "react";
import "./CarCard.css";

const UNSPLASH_ACCESS_KEY = "1salBm6r2tGqVNBdOyg1BG4BMmOJDPfyIkNZST5xsDo";

function CarCard({ name, year, price, details }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(name)}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`
        );
        const data = await response.json();
        if (data.results && data.results[0]) {
          setImageUrl(data.results[0].urls.small);
        } else {
          setImageUrl("https://via.placeholder.com/300x200?text=No+Image");
        }
      } catch (error) {
        setImageUrl("https://via.placeholder.com/300x200?text=Error");
      }
    }
    fetchImage();
  }, [name]);

  return (
    <div className="car-card">
      <div className="car-image-container">
        <img src={imageUrl} alt={name} className="car-image" />
      </div>
      <div className="car-info">
        <h3 className="car-name">{name}</h3>
        <div className="car-details">
          <div className="detail-item">
            <span>� {year}</span>
          </div>
          <div className="detail-item">
            <span>{details}</span>
          </div>
        </div>
        <div className="price">{price}</div>
        <button className="book-now">Rent now</button>
      </div>
    </div>
  );
}

export default CarCard;