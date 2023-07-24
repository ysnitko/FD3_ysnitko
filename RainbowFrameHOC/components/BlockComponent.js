import React from 'react';
import { withRainbowFrame } from './withRainbowFrame';
import DoubleButton from './DoubleButton';

const BlockComponent = () => {
  let colors = ['red', 'orange', 'yellow', 'green', '#00BFF', 'blue', 'purple'];
  let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);
  return (
    <FramedDoubleButton
      caption1="я из лесу"
      caption2="мороз"
      cbPressed={(num) => alert(num)}
    >
      вышел, был сильный
    </FramedDoubleButton>
  );
};

export default BlockComponent;
