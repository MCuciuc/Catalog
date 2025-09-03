import React, { useState } from "react";
import "./Filters.css";

function Filters({ setYearFilter, setPriceFilter }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="filters">
<button onClick={() => setShowMenu(!showMenu)} className="filter-button">
  ⚙️
</button>


      {showMenu && (
        <div className="filter-menu">
          <div>
            <label>An:</label>
            <select onChange={(e) => setYearFilter(e.target.value)}>
              <option value="">Toate</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2015">2015</option>
              <option value="2008">2008</option>
            </select>
          </div>

          <div>
            <label>Preț:</label>
            <select onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="">Toate</option>
              <option value="low">Sub 15,000 €</option>
              <option value="mid">15,000 € - 40,000 €</option>
              <option value="high">Peste 40,000 €</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters;
