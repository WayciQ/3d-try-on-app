import React from "react";

export const DetailModel = ({ name, descripte, category }) => {
  return (
    <div className="deltail-model">
      <p className="name">
        <span>Name:</span> {name}
      </p>
      <p className="category">
        <span>Category:</span> {category}
      </p>
      <p className="description">
        <span>Description:</span> {descripte}
      </p>
    </div>
  );
};
