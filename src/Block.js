import React, { useState } from "react";
import "./Block.css";
function Block() {
  const [input, setInput] = useState("");
  return (
    <div className="block">
      <input
        type="text"
        placeholder="add any value..."
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>{input}</h1>
    </div>
  );
}

export default Block;
