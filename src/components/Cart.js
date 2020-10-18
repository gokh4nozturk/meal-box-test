import React from "react";
import formatCurrency from "../util";

import { Button, CartContainer } from "./Style";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <CartContainer>
      {cartItems.length === 0 ? (
        <div className="cart-header">Sepetiniz boş</div>
      ) : (
        <div className="cart-header">
          Sepetinizde {cartItems.length} ürün var.
        </div>
      )}
      <div>
        <div className="cart">
          <ul className="cart-items ">
            {cartItems.map((item) => (
              <li>
                <div>
                  <img src={item.image} alt={item.caption} />
                </div>
                <div className="product-name">{item.name}</div>
                <div className="right">
                  <div>
                    {item.price} x {item.count}{" "}
                  </div>
                  <Button
                    className="button rmv-btn"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div className="total">
            <div>
              Toplam:{" "}
              {formatCurrency(
                cartItems.reduce((acc, cur) => acc + cur.price * cur.count, 0)
              )}
            </div>
            <Button className="button primary">İşlem Yap</Button>
          </div>
        )}
      </div>
    </CartContainer>
  );
};

export default Cart;
