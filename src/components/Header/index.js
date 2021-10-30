import React from "react";
import "./styles.css";
import img1 from "../../assets/BlackMark.cf17c487.png";
export const Header = (props) => {
  return (
    <>
      <div className="header__container">
        <div className="image__container">
          <img src={img1} />
          <h1 className="header__title">SafeArt</h1>
        </div>

        <div className="button__container">
          {" "}
          <button className="menu_button" onClick={props.onclickart}>
            Artwork
          </button>
          <button className="menu_button" onClick={props.onclickhome}>
            Home
          </button>
          <button className="menu_button" onClick={props.onclickcreators}>
            creator
          </button>{" "}
        </div>
        <div>
          <button className="connect__button">Connect wallet</button>
        </div>
      </div>
    </>
  );
};
