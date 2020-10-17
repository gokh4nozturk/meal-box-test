import React, { useEffect, useState, useMemo } from "react";
import data from "./menu.json";

import MainMenu from "./components/MainMenu";
import SubMenu from "./components/SubMenu";
import Cart from "./components/Cart";
import Menus from "./components/Menus";

function App() {
  const [menuler, setMenuler] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [filters, setFilter] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const [mainMenu, ...categories] = data.menus;
    setMenuler(mainMenu.items);
    setSubCategories(categories);
  }, []);

  const removeFromCart = (product) => {
    const cartItem = cartItems.slice();
    setCartItems(cartItem.filter((item) => item.name !== product.name));
  };

  const addToCart = (product) => {
    console.log(product.name + " eklendi.");
    const cartItem = cartItems.slice();
    let alreadyInCart = false;
    cartItem.forEach((item) => {
      if (item.name === product.name) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItem.push({ ...product, count: 1 });
    }
    setCartItems(cartItem);
  };

  const selectSubCategory = (items) => {
    const { subMenus = [] } = items;
    setFilter(subMenus);
    addToCart(items);
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
    <div className="product-list">
      <div className="product-list-item item-1">
        <div>
          {menuler.map((item) => {
            return (
              <MainMenu key={item.key} onSelect={selectSubCategory} {...item} />
            );
          })}
        </div>
        <div>
          <SubMenu menu={filteredItems} onSelect={selectSubCategory} />
        </div>
      </div>
      <div className="product-list-item item-3">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
