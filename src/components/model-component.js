import React, { useState } from "react";
import Model from "react-modal";

Model.setAppElement("#root");

function ModelComponent() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setOpenModel(true)}>Open Model</button>
      </div>
      <Model
        isOpen={openModel}
        onRequestClose={() => setOpenModel(true)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "grey"
          },
          content: {
            color: "#0094ff"
          }
        }}
      >
        <h2>Model Header</h2>
        <p>Model content</p>

        <div>
          <button onClick={() => setOpenModel(false)}>Close</button>
        </div>
      </Model>
    </div>
  );
}

export default ModelComponent;
