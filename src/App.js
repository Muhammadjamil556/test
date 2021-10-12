import React, { useState, useEffect } from "react";
import "./App.css";
import MainAuctionArtapi from "./api";
import { AllApis } from "./api";
function App() {
  const [maindata, setMaindata] = useState([]);
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    fetcheddata();
    Allapidata();
  }, []);
  const fetcheddata = async () => {
    let data = await MainAuctionArtapi();
    setMaindata([data.mainAuctionArt]);
  };

  const Allapidata = async () => {
    let value = await AllApis();
    setAlldata(value);
  };
  console.log(maindata);
  console.log(alldata);
  return <div className="App"></div>;
}

export default App;
