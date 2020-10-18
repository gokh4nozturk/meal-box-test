import React, { useState } from "react";
import Menus from "./Menus";

import { Main, Button, AnaMenu } from "./Style";

const MainMenu = ({ menu, onSelect, ...item }) => {
  const [toggle, setToggle] = useState(false);

  const isControl = () => {
    setToggle(!toggle);
  };

  return (
    <Main>
      <AnaMenu className="main-comp-item anamenu-item">
        <img
          className="anamenu-img anamenu-item"
          src={item.image}
          alt={item.caption}
        />
        {item.name} {item.price || " "}
        <div className="caption"></div>
        <Button onClick={isControl}>{toggle ? "Kapat" : "Aç"}</Button>
      </AnaMenu>

      {toggle && (
        <Menus className="main-comp-item" onSelect={onSelect} {...item} />
      )}
    </Main>
  );
};
export default MainMenu;
