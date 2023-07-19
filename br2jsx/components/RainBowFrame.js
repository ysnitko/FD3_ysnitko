import React from 'react';

const RainbowFrame = (props) => {
  const { colors } = props;
  if (colors.length === 0) {
    return <div>{props.children}</div>;
  }
  return (
    <div
      style={{
        border: `2px solid ${colors[0]}`,
        padding: '5px',
        textAlign: 'center',
      }}
    >
      <RainbowFrame colors={colors.slice(1)}>{props.children}</RainbowFrame>
    </div>
  );
};

export default RainbowFrame;
