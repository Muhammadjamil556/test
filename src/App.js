import React, { useState, useEffect } from "react";
import "./App.css";
import MainAuctionArtapi from "./api";
import { AllApis } from "./api";
import { Header } from "./components/Header";
import { Homecard } from "./components/Home";
import { Mappedcreators } from "./components/Cardmapped/mappedcreators";

import { CardMapped } from "./components/Cardmapped";
function App() {
  const [maindata, setMaindata] = useState([]);
  const [featuredArtsdata, setfeaturedArtsdata] = useState([]);
  const [featuredCreatorsdata, setfeaturedCreatorsdata] = useState([]);
  const [home, sethome] = useState(true);
  const [Artworks, setArtworks] = useState(false);
  const [creator, setcreator] = useState(false);
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
    setfeaturedArtsdata(value.featuredArts);
    setfeaturedCreatorsdata(value.featuredCreators);
  };
  console.log(featuredArtsdata);

  const onclickhome = () => {
    sethome(true);
    setArtworks(false);
    setcreator(false);
  };
  const onclickart = () => {
    sethome(false);
    setArtworks(true);
    setcreator(false);
  };
  const onclickcreators = () => {
    sethome(false);
    setArtworks(false);
    setcreator(true);
  };

  return (
    <div className="App">
      <Header
        onclickhome={onclickhome}
        onclickart={onclickart}
        onclickcreators={onclickcreators}
      />
      {home ? (
        <div>
          <Homecard maindata={maindata} />
          <CardMapped featuredArtsdata={featuredArtsdata} />
          <div className="footers_">
            <h2>Featured artworks</h2>
            <h3>View all artworks</h3>
          </div>
          <hr />
          <CardMapped featuredArtsdata={featuredArtsdata} />
          <div className="footers_">
            <h2>Featured creators</h2>
            <h3>View all creators</h3>
          </div>
          <hr />

          <Mappedcreators featuredCreatorsdata={featuredCreatorsdata} />
        </div>
      ) : (
        <></>
      )}
      {Artworks ? (
        <>
          <CardMapped featuredArtsdata={featuredArtsdata} />
          <CardMapped featuredArtsdata={featuredArtsdata} />
        </>
      ) : (
        <></>
      )}
      {creator ? (
        <div className className="">
          <Mappedcreators featuredCreatorsdata={featuredCreatorsdata} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
