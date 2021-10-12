import React from "react";

const MainAuctionArtapi = async () => {
  const response = await fetch(
    "http://safeart.alshumaal.com/api/homepage/homepage.php"
  );
  const data = await response.json();
  return data;
};

export default MainAuctionArtapi;

export const AllApis = async () => {
  const res = await fetch(
    "http://safeart.alshumaal.com/api/homepage/featured_art.php"
  );
  const value = res.json();
  return value;
};
