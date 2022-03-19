import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random" src={img + "?grayscale"} />
    <img
      className="food-img"
      alt="SambarRice"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYwtH7C4KqnkyoJQFRuNZScZue67H6LjO6A&usqp=CAU"
    />
    <img
      className="food-img"
      alt="noodles"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99nWBYze7Ccj7tdkBZIYYu2tXLV4hRsS2yA&usqp=CAU"
    />
  </div>,
  document.getElementById("root")
);
