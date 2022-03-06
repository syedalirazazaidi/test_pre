import React from "react";

function Listinggroup({ onItemSelect, item, textProperty, valueProperty }) {
  return (
    <ul className="list-group">
      {item.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          className="list-group-item"
          key={item[valueProperty]}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
}
Listinggroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Listinggroup;
