import React from "react";
import "./style.css";
export const Cards = (props) => {
  return (
    <div className="card_container">
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
      </div>
    </div>
  );
};
