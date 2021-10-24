import styled from "styled-components";

export const BasicBtn = styled.button<{ canClick: boolean }>`
  padding: 16px 20px;
  border: 1px solid ${(props) => (props.canClick ? "#30c8d6" : "#f2f2f2")};
  background-color: ${(props) => (props.canClick ? "#30c8d6" : "#d0d0d0")};
  color: ${(props) => (props.canClick ? "white" : "#f2f2f2")};
  font-weight: bold;
  font-size: 1rem;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  cursor: pointer;
`;