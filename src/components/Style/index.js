import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid red;
  grid: 2/3;

  .description {
    font-size: 18px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px;

  .card-item {
    margin: 2px;
    padding: 5px;
  }
  .menu-name {
    text-align: center;
  }
  .menu-img {
    width: 250px;
  }
`;

export const OpenButton = styled.button`
  background-color: green;
`;

export const AnaMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 5px;
`;

export const CartContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  display: flex;

  .cart {
    padding: 1rem;
    margin: 1rem;
    display: flex;
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .total > div {
    font-size: 1.3rem;
  }
  .total > div,
  .total > button {
    flex: 1;
  }
`;
