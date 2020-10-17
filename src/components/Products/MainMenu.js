import React, { useState } from "react";
import { Container, Card, OpenButton, AnaMenu } from "../Style";

const MainMenu = ({ menu, onSelect, ...item }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <AnaMenu className="ana-menu">
        <div className="caption">{item.name}</div>
        <img width="250px" src={item.image} alt={item.caption} />
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
        <Container>
          {item.items.map((items) => (
            <Card key={items.image}>
              {/* {console.log(items)} */}
              <div className="card-item menu-name">{items.name}</div>
              <img
                className="card-item menu-img"
                src={items.image}
                alt={items.caption}
              />
              <OpenButton
                className="card-item"
                onClick={() => {
                  onSelect(items);
                }}
              >
                Seç
              </OpenButton>
            </Card>
          ))}
        </Container>
      )}
    </div>
  );
};
export default MainMenu;
