import React, { forwardRef } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy-bundle.cjs";

const CustomToolTip = () => {
  return <span style={{ color: "green" }}>Colored button</span>;
};

const ChildComponent = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <span>From Child Component</span>
    </div>
  );
});

function ToolTipComponent() {
  return (
    <div>
      <Tippy content={"Plain button"}>
        <button>Plain Button</button>
      </Tippy>

      <Tippy content={<span style={{ color: "red" }}>Colored button</span>}>
        <button>Colored Button</button>
      </Tippy>

      <Tippy content={<CustomToolTip></CustomToolTip>}>
        <button>Custome Button</button>
      </Tippy>
      <Tippy content={<CustomToolTip></CustomToolTip>}>
        <ChildComponent></ChildComponent>
      </Tippy>
    </div>
  );
}

export default ToolTipComponent;
