import React from "react";
import "./styles.css";
export const Card = (props) => {
  return (
    <div className="card__outercontainer">
      <div className="card__container">
        <div className="card__imgcontainer">
          <img src={props.img} />
        </div>
        <div className="card__titlecontainer">
          <h3>{props.title}</h3>
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
            <h3>Auction end</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
