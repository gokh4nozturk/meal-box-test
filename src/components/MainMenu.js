import React, { useState } from "react";
import Menus from "./Menus";
import { Main, OpenButton, AnaMenu } from "./Style";

const MainMenu = ({ menu, onSelect, ...item }) => {
  const [toggle, setToggle] = useState(false);

  const isControl = () => {
    setToggle(!toggle);
  };

  return (
    <Main>
      <AnaMenu className="main-comp-item">
        <img className="anamenu-img" src={item.image} alt={item.caption} />
        <div className="caption">{item.name}</div>
        <OpenButton onClick={isControl}>{toggle ? "Kapat" : "Aç"}</OpenButton>
      </AnaMenu>

      {toggle && (
        <Menus
          className="main-comp-item"
          isControl={isControl}
          onSelect={onSelect}
          {...item}
        />
      )}
    </Main>
  );
};
export default MainMenu;
