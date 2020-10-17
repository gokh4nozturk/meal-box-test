import React from "react";

const SubMenu = ({ menu }) => {
  return (
    <div>
      {menu.map((subMenu) => (
        <>
          <div>{subMenu.description}</div>
          <div>
            {subMenu.items.map((item) => (
              <div>
                {item.name} {item.price || ""}
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
export default SubMenu;
