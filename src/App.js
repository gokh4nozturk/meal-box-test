import React, { useEffect, useState, useMemo } from "react";
import data from "./menu.json";
import styled from "styled-components";

import MainMenu from "./components/Products/MainMenu";
import SubMenu from "./components/Products/SubMenu";

const MainWrapper = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-width: 85%;
  margin: 0 auto;
  margin-top: 0.5rem;
`;

function App() {
  const [menuler, setMenuler] = useState([]);
  const [subCategories, setSetCategories] = useState([]);
  const [filters, setFilter] = useState([]);

  useEffect(() => {
    const [mainMenu, ...categories] = data.menus;
    setMenuler(mainMenu.items);
    // console.log(mainMenu);
    setSetCategories(categories);
  }, []);

  const selectSubCategory = (items) => {
    const { subMenus } = items;
    setFilter(subMenus);
  };

  const filteredMenus = useMemo(() => {
    if (filters.length > 0) {
      return subCategories.filter((category) => console.log(category));
    }
    return [];
  }, [filters, subCategories]);

  return (
    <MainWrapper>
      {menuler.map((item) => {
        // buraya category component
        return (
          <MainMenu key={item.key} {...item} onSelect={selectSubCategory} />
        );
      })}
      <hr />
      {filteredMenus.map((item) => {
        // buraya item component
        return <SubMenu {...item} onSelect={(item) => alert(item.name)} />;
      })}
    </MainWrapper>
  );
}

export default App;
