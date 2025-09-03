import React from "react";
import "./Sidebar.css";

function Sidebar({ position }) {

  return <aside className={`sidebar ${position}`} />;
}

export default Sidebar;
