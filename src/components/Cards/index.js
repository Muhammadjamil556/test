import React from "react";
import "./styles.css";
export const Card = (props) => {
  return (
    <div>
      <div className="card__container">
        <div className="card__imgcontainer">
          <img src={props.img} />
        </div>
        <div className="card__titlecontainer">
          <p>{props.title}</p>
          <div className="card__buttonimg">
            <img src={props.profile} />
            <h3>{props.name}</h3>
          </div>
        </div>

        <div className="card__price_auction_container">
          <div className="price__container">
            <p>Reserved price</p>
            <p>{props.price}</p>
          </div>
          <div className="card_auction">
            <h3>Auction ende</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
