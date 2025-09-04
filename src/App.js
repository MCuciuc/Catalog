import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CarList from "./components/CarList";
import Footer from "./components/Footer";
import HelperButton from "./components/Helper";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <CarList />
        </main>
        <Sidebar />
      </div>

      <Footer />

      <HelperButton />
    </div>
  );
}

export default App;
