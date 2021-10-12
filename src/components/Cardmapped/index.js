import React from "react";
import "./styles.css";
import { Card } from "../Cards";
export const CardMapped = ({ featuredArtsdata }) => {
  let data = featuredArtsdata;

  return (
    <>
      <div className="mappedcard">
        {data.map((currentele) => {
          return (
            <Card
              img={currentele.owner_img}
              title={currentele.art_name}
              name={currentele.creator_name}
              profile={currentele.creator_img}
              price={currentele.art_price}
            />
          );
        })}
      </div>
    </>
  );
};
