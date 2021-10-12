import React, { useState, useEffect } from "react";
import "./App.css";
import MainAuctionArtapi from "./api";
import { AllApis } from "./api";
import { Header } from "./components/Header";
import { Homecard } from "./components/Home";
function App() {
  const [maindata, setMaindata] = useState([]);
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    fetcheddata();
    Allapidata();
  }, []);
  const fetcheddata = async () => {
    let data = await MainAuctionArtapi();
    setMaindata(data.mainAuctionArt);
  };

  const Allapidata = async () => {
    let value = await AllApis();
    setAlldata(value);
  };

  return (
    <div className="App">
      <Header />
      <Homecard maindata={maindata} />
    </div>
  );
}

export default App;
