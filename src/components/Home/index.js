import React from "react";

import "./styles.css";
import { Button } from "../button";
export const Homecard = (props) => {
  const data = props.maindata;

  return (
    <>
      <div className="containerHome">
        <div className="img_container">
          <img src={data.owner_img} />
        </div>
        <div className="information__container">
          <Button name={props.maindata.creator_name} img={data.owner_img} />
          <div className="title_container">
            <h2>{data.art_name}</h2>
          </div>

          <div className="price_container">
            <div className="price_">
              <div>
                <p className="price__title">Reserved price</p>
                <h1>3.000ETH</h1>
              </div>
              <hr className="hr__tag" />
            </div>

            <div className="owner__container">
              <p className="price__title">Owned By</p>
              <Button name={data.owner_name} img={data.owner_img} />
            </div>
          </div>
          <div className="viewart__button">
            <button>View Art Work </button>
          </div>
        </div>
      </div>
      <div className="auction__view">
        <h3 className="auction__footer"> Live Auction</h3>
        <h4 className="auction__viewfooter">View all live auctions</h4>
      </div>
      <hr />
    </>
  );
};
