import React, { useEffect, useState, useMemo } from "react";
import data from "./menu.json";
import styled from "styled-components";

import MainMenu from "./components/Products/MainMenu";
import SubMenu from "./components/Products/SubMenu";

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 85%;
  margin: 0 auto;
  margin-top: 0.5rem;
`;

function App() {
  const [menuler, setMenuler] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [filters, setFilter] = useState([]);
  const [ekMenu, setEkMenu] = useState([]);

  useEffect(() => {
    const [mainMenu, ...categories] = data.menus;
    setMenuler(mainMenu.items);
    setSubCategories(categories);
  }, []);

  const selectSubCategory = (items) => {
    const { subMenus } = items;
    setFilter(subMenus);
  };

  // const filteredMenus = useMemo(() => {
  //   if (filters.length > 0) {
  //     return subCategories.filter((category) => category.length > -1);
  //   }
  //   return [];
  // }, [filters, subCategories]);

  const selectEkMenu = (items) => {
    const { subMenus } = items;
    setEkMenu(subMenus);
  };

  return (
    <MainWrapper>
      {menuler.map((item) => {
        // buraya category component
        return (
          <MainMenu key={item.key} {...item} onSelect={selectSubCategory} />
        );
      })}
      <hr />
      {ekMenu.map((item) => {
        // buraya item component
        return console.log(item);
      })}
    </MainWrapper>
  );
}

export default App;
