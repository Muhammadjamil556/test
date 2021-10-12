import React from "react";
import "./styles.css";
import img1 from "../../assets/BlackMark.cf17c487.png";
export const Header = () => {
  return (
    <div className="header__container">
      <div className="image__container">
        <img src={img1} />
        <h1>SafeArt</h1>
      </div>

      <div className="button__container">
        {" "}
        <button className="menu_button">Artwork</button>
        <button className="menu_button">Home</button>
        <button className="menu_button">creator</button>{" "}
      </div>
      <div>
        <button className="connect__button">Connect wallet</button>
      </div>
    </div>
  );
};
