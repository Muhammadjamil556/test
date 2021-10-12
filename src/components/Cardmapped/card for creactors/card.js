import React from "react";
import "./styles.css";
export const Cards = (props) => {
  return (
    <div>
      <div className="_container">
        <div className="_imgcontainer">
          <img src={props.img} />
        </div>
        <div className="_buttonimg">
          <img src={props.profile} />
        </div>
        <div className="_titlecontainer">
          <p>{props.title}</p>
          <div className="_buttonimg">
            <h3>@{props.name}</h3>
          </div>
        </div>

        <div className="_price_auction_container">
          <div className="__container">
            <p>Reserved price</p>
            <p>{props.price}</p>
          </div>
          <div className="card_auction">
            <h3>Auction ended</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
