import React from 'react';

const Br2jsx = (props) => {
  const { text } = props;
  let textDiv = text
    .split('<br>')
    .join(' ')
    .split('<br/>')
    .join(' ')
    .split(' ');
  console.log(textDiv);
  const element = textDiv.map((elem, index) => {
    return [elem, <br key={index} />];
  });

  return <div>{element}</div>;
};

export default Br2jsx;
