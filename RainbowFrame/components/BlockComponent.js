import React from "react";

import RainBowFrame from "./RainBowFrame";
import { withColorBackground } from "./withColorBackground";
let colors = ["red", "orange", "yellow", "green", "#00BFF", "blue", "purple"];
class BlockComponent extends React.Component {
  render() {
    const RainBowFrameBorder = withColorBackground(RainBowFrame);
    return (
      <RainBowFrameBorder colors={colors}>
        <RainBowFrameBorder colors={colors}>
          <RainBowFrameBorder colors={colors} />
        </RainBowFrameBorder>
      </RainBowFrameBorder>
    );
  }
}

export default BlockComponent;
