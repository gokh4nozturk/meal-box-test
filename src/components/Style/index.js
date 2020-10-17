import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid red;

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
    width: 300px;
  }
`;

export const OpenButton = styled.button`
  background-color: green;
`;

export const AnaMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;
