import React from "react";

import { CartContainer } from "./Style";

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
                <div>{item.name}</div>
                <div className="right">
                  {item.price} x {item.count}{" "}
                  <button
                    className="button rmv-btn"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div className="total">
            <div>
              Toplam:{" "}
              {/* {cartItems.map((item) => {
                  let total = 0;
                  return (total += item.price * item.count);
                })} */}
              {cartItems.reduce((acc, cur) => acc + cur.price * cur.count, 0)}
              {"₺"}
            </div>
            <button className="button primary">İşlem Yap</button>
          </div>
        )}
      </div>
    </CartContainer>
  );
};

export default Cart;
