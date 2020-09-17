import styled from "styled-components";

export const Grid = styled.div`
  grid-template-columns: repeat(25, 1fr);
  grid-column-start: span 2;
  display: grid;
  grid-gap: 1px;
  padding: 10px;
  margin: 10px;
  justify-content: center;
  position: relative;
  transition: transform 0.5s ease-out;
  pointer-events: none;
`;

export const Cell = styled.span`
  border: solid 1px #ddd;
  padding-top: 100%;
  border-radius: 10%;
  position: relative;
  transition: background-color 0.2s ease-out;
`;
