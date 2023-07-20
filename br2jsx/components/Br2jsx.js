import React from "react";

const Br2jsx = (props) => {
  const { text } = props;
  let textDiv = text
    .split("<br>")
    .join(" ")
    .split("<br/>")
    .join(" ")
    .split(" ");

  const element = textDiv.map((elem, index) => {
    return [elem, <br key={index} />];
  });

  let lastElement = element[element.length - 1];
  lastElement.splice(1, 1);

  return <div>{element}</div>;
};

export default Br2jsx;
