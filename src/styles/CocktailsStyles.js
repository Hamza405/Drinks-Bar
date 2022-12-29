import styled from "styled-components";

export const CardStyle = styled.div`
  overflow: hidden;
  padding: 16px 0px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardBody = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDes = styled.div`
  padding: 8px;
`;
