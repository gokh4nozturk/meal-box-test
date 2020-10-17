import React from "react";

import { Container, Card, OpenButton } from "./Style";

const SubMenu = ({ onSelect, menu }) => {
  return (
    <div>
      {menu.map((subMenu) => (
        <>
          <p className="menu-description">{subMenu.description}</p>
          <Container>
            {subMenu.items.map((item) => (
              <Card key={item.image}>
                {/* {console.log(items)} */}
                <img
                  className="card-item menu-img"
                  src={item.image}
                  alt={item.caption}
                />
                <div className="card-item menu-name">
                  {item.name} {item.price || " "}
                </div>
                <OpenButton
                  className="card-item"
                  onClick={() => {
                    onSelect(item);
                  }}
                >
                  Seç
                </OpenButton>
              </Card>
            ))}
          </Container>
        </>
      ))}
    </div>
  );
};
export default SubMenu;
