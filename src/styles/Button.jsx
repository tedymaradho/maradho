import styled, { css } from "styled-components";

const ButtonDefault = css`
  padding: 15px 20px;
  border: none;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const ButtonPrimary = styled.button`
  ${ButtonDefault}
  background-color: ${(props) => props.theme.main};
  color: white;

  &:hover {
    background-color: ${(props) => props.theme.shade};
  }
`;

export const ButtonInverse = styled.button`
  ${ButtonDefault}
  background-color: white;
  color: ${(props) => props.theme.text};
  opacity: 80%;

  &:hover {
    opacity: 100%;
  }
`;

export const ButtonInverseSmall = styled.button`
  ${ButtonDefault}
  padding: 10px 15px;
  color: ${(props) => props.theme.text};
  opacity: 80%;

  &:hover {
    opacity: 100%;
    background-color: white;
  }
`;
