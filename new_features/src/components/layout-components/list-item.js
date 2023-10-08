import React from "react";

function ListItem({ location, path, activeClass, children }) {
  if (location === path) {
    return <li className={activeClass}>{children}</li>;
  } else {
    return <li>{children}</li>;
  }
}

export default ListItem;
