import React from "react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";

function Spinners() {
  return (
    <div>
      <BounceLoader loading size="24" color="red" />
      <BarLoader loading size="48" color="yellow" />
      <BeatLoader loading size="72" color="orange" />
    </div>
  );
}

export default Spinners;
