import React from "react";

import { Cards } from "./card for creactors/card";
export const Mappedcreators = ({ featuredCreatorsdata }) => {
  let data = featuredCreatorsdata;
  console.log(data);
  return (
    <div>
      <div className="mappedcard">
        {data.map((currentele) => {
          return (
            <Cards
              img={currentele.creator_cover}
              title={currentele.username}
              name={currentele.username}
              profile={currentele.creator_img}
              bio={currentele.bio}
            />
          );
        })}
      </div>
    </div>
  );
};
