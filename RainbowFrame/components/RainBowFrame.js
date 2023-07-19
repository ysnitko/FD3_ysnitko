import React from "react";

function RainBowFrame({ colors }) {
  return (
    <div
      style={{
        border: `solid ${colors[0]} 1px `,
        margin: "5px",
        textAlign: "center",
      }}
      className="Block"
    >
      Hello!
    </div>
  );
}

export default RainBowFrame;
