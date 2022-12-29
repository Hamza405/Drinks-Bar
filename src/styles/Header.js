import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 5rem;
  box-shadow: 0 4px 2px -2px gray;
  z-index: 10;
`;

export const TitleStyle = styled.p`
  display: inline-block;
  font-family: "Poppins";
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 2rem 1rem;
  color: var(--black-1);
`;

export const ButtonStyle = styled.button`
  display: inline-block;
  height: auto;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  overflow: hidden;
`;
