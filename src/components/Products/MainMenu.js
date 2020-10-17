import React, { useState } from "react";
import { Container, Card, OpenButton } from "../Style";

const MainMenu = ({ onSelect, ...item }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="caption">{item.name}</div>
      <img src={item.image} alt={item.caption} />
      <OpenButton
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "Kapat" : "Aç"}
      </OpenButton>

      {toggle && (
        // buraya listing component
        <Container>
          {item.items.map((items) => (
            <Card>
              <div className="card-item menu-name">{items.name}</div>
              <img
                className="card-item menu-img"
                src={items.image}
                alt={item.caption}
              />
              <OpenButton
                className="card-item"
                onClick={() => {
                  onSelect(items);
                }}
              >
                Aç
              </OpenButton>
            </Card>
          ))}
        </Container>
      )}
    </div>
  );
};
export default MainMenu;
