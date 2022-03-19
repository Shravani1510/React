import React from "react";

const date = new Date();
const currentTime = date.getHours();

function Heading() {
  if (currentTime < 12) {
    return (
      <h1 className="heading" style={{ color: "red" }}>
        Good Morning
      </h1>
    );
  } else if (currentTime < 18) {
    return (
      <h1 className="heading" style={{ color: "green" }}>
        Good Afternoon
      </h1>
    );
  } else {
    return (
      <h1 className="heading" style={{ color: "blue" }}>
        Good Night
      </h1>
    );
  }
}

export default Heading;
