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
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const [mainMenu, ...categories] = data.menus;
    setMenuler(mainMenu.items);
    setSubCategories(categories);
  }, []);

  // const filteredMenus = useMemo(() => {
  //   if (filters.length > 0) {
  //     //category.length > -1
  //     return subCategories.filter((category) => {
  //       menu.push(category.items);
  //     });
  //   }
  //   return [];
  // }, [filters, subCategories]);

  const selectSubCategory = (items) => {
    const { subMenus = [] } = items;
    if (subMenus.lenght > 0) setFilter(subMenus);
    // add to cart
    alert(items.name, items.prices);
  };

  const filteredItems = useMemo(() => {
    if (filters.length > 0) {
      return subCategories.filter((category) => {
        return filters.indexOf(category.key) > -1;
      });
    }
    return [];
  }, [filters, subCategories]);

  return (
    <MainWrapper>
      {menuler.map((item) => {
        // buraya category component
        return (
          <MainMenu key={item.key} onSelect={selectSubCategory} {...item} />
        );
      })}
      <SubMenu menu={filteredItems} onSelect={(item) => alert(item)} />
    </MainWrapper>
  );
}

export default App;
