import styled from "styled-components";
export const ModalContainerStyle = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 0.75rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContentStyle = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

export const FormContainer = styled.div`
  margin: 0.5rem 0;
  padding: 10px;
`;
