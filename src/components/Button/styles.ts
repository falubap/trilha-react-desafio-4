import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:disabled {
    display: disabled;
    opacity: 0.4;
  }
  &:hover {
    opacity: 0.4;
    cursor: none;
  }
  &:disabled {
      opacity: 0.8;
      cursor:no-drop;
  }
`;