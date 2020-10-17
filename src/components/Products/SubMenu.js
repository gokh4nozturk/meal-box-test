import React from "react";

import { Container, Card, OpenButton } from "../Style";

const SubMenu = ({ menu }) => {
  return (
    <div>
      {menu.map((subMenu) => (
        <Container>
          <div>{subMenu.description}</div>

          {subMenu.items.map((item) => (
            <Card key={item.image}>
              {/* {console.log(items)} */}
              <div className="card-item menu-name">
                {item.name} {item.price || ""}
              </div>
              <img
                className="card-item menu-img"
                src={item.image}
                alt={item.caption}
              />
              <OpenButton className="card-item" onClick={() => {}}>
                Seç
              </OpenButton>
            </Card>
          ))}
        </Container>
      ))}
    </div>
  );
};
export default SubMenu;
