import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import CarList from "./components/CarList";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar position="left" />
        <main className="content">
          <CarList />
        </main>
        <Sidebar position="right" />
      </div>
    </div>
  );
}

export default App;
