import React, { useEffect, useState, useMemo } from "react";
import data from "./menu.json";
import styled from "styled-components";

import MainMenu from "./components/Products/MainMenu";
import SubMenu from "./components/Products/SubMenu";

function App() {
  const [menuler, setMenuler] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [filters, setFilter] = useState([]);

  useEffect(() => {
    const [mainMenu, ...categories] = data.menus;
    setMenuler(mainMenu.items);
    setSubCategories(categories);
  }, []);

  const selectSubCategory = (items) => {
    const { subMenus = [] } = items;
    setFilter(subMenus);
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
    <div>
      {menuler.map((item) => {
        // buraya category component
        return (
          <MainMenu key={item.key} onSelect={selectSubCategory} {...item} />
        );
      })}
      <SubMenu menu={filteredItems} onSelect={(item) => alert(item)} />
    </div>
  );
}

export default App;
