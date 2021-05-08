import React from "react";

const Selection = ({ heading }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <select>
        <option>Notes</option>
        <option>Question Paper</option>
      </select>
    </div>
  );
};

export default Selection;
