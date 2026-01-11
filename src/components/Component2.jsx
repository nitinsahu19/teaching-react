import React from "react";
import { memo } from "react";

const Component2 = () => {
  console.log("Component 2 rendered");
  return (
    <div>
      <h1>Component2</h1>
    </div>
  );
};

export default memo(Component2);
