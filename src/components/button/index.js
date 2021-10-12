import React from "react";
import "./styles.css";

export const Button = (props) => {
  console.log(props);
  return (
    <>
      <div className="button___container">
        <button className="buttoncontainer">
          <img className="button_image" src={props.img} />
          <h2>@{props.name}</h2>
        </button>
      </div>
    </>
  );
};
