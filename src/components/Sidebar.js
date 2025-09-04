import React from "react";
import "../styles/Sidebar.css";

function Sidebar({ position }) {

  return <aside className={`sidebar ${position}`} />;
}

export default Sidebar;
