import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  flex-wrap: wrap;

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
`;

export const OpenButton = styled.button`
  background-color: green;
`;
