import React from "react";
import { Container, Card, Button } from "./Style";
const Menus = ({ isControl, onSelect, ...item }) => {
  return (
    <div>
      <Container>
        {item.items.map((items) => (
          <Card key={items.image}>
            {/* {console.log(items)} */}
            <img
              className="card-item menu-img"
              src={items.image}
              alt={items.caption}
            />
            <div className="card-item menu-name">
              {" "}
              {items.name} {items.price || " "}
            </div>
            <Button
              className="card-item"
              onClick={() => {
                onSelect(items);
                isControl();
              }}
            >
              Seç
            </Button>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Menus;
