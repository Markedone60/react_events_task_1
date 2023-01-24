import React from "react";

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  const button = filters.map((name, index) =>
    <button key={index} className={"button" + (selected === name ? " selected" : "")} onClick={() => {onSelectFilter(name);
    }}>{name}</button>
  )

  return (
    <div className="buttons">{button}</div>
  )
}
