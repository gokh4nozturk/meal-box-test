import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid: 2/3;

  .description {
    background: gray;
    font-size: 18px;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 10px;
  border: 1px solid white;
  border-radius: 20px;
  place-items: center;

  .card-item {
  }
  .menu-name {
    text-align: center;
  }
  .menu-img {
    width: 250px;
    border-radius: 20px;
  }
`;

export const OpenButton = styled.button`
  background: #3db46d;
  border-radius: 20px;
  width: 95%;
  margin-bottom: 2px;
`;

export const AnaMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  margin: 5px;
  border: 1px solid white;
  border-radius: 20px;

  .anamenu-item {
  }

  .anamenu-img {
    width: 250px;
    border-radius: 20px;
  }
`;

export const CartContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: 90%;

  .cart {
    padding: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: flex-start;
  }

  .cart-header {
    border-bottom: 2px solid black;
  }

  .cart-items {
    padding: 0;
    width: 100%;
    list-style-type: none;
  }

  .cart-items img {
    width: 5rem;
  }

  .cart-items li {
    display: flex;
  }

  .cart-items li div {
    padding: 0.5rem;
  }

  .cart-items li div::last-child {
    flex: 1;
  }

  .right {
    text-align: right;
  }
  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border: 1px solid red;
  }
  .total div {
    font-size: 1.3rem;
  }

  .rmv-btn {
    border-radius: 20px;
    background: #eb5757;
    color: white;
  }
  .primary {
    background: #3db46d;
    border-radius: 20px;
    width: 50%;
  }
`;
