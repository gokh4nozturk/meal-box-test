import React, { useState } from "react";
import Menus from "./Menus";
import { Container, Card, OpenButton, AnaMenu } from "./Style";

const MainMenu = ({ menu, onSelect, ...item }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <AnaMenu className="ana-menu">
        <img width="250px" src={item.image} alt={item.caption} />
        <div className="caption">{item.name}</div>
        <OpenButton
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Kapat" : "Aç"}
        </OpenButton>
      </AnaMenu>

      {toggle && (
        // buraya listing component
        <Menus className="product-list item-1" onSelect={onSelect} {...item} />
      )}
    </div>
  );
};
export default MainMenu;
