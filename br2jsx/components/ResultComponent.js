import React from 'react';
import Br2jsx from './Br2jsx';

const ResultComponent = () => {
  let text = 'первый<br>второй<br/>третий<br/>последний';
  return <Br2jsx text={text} />;
};

export default ResultComponent;
