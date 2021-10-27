import styled from "styled-components";

export const BasicBtnUI = styled.button<{ disabled: boolean }>`
  padding: 16px 20px;
  border: 1px solid ${({ disabled }) => (!disabled ? "#30c8d6" : "#f2f2f2")};
  border-radius: 4px;
  background-color: ${({ disabled }) => (!disabled ? "#30c8d6" : "#d0d0d0")};
  color: ${({ disabled }) => (!disabled ? "white" : "#f2f2f2")};
  font-weight: bold;
  font-size: 1rem;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  cursor: pointer;
`;

type Props = {
  children?: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
};
export const BasicBtn: React.VFC<Props> = ({ children, onClick, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <BasicBtnUI onClick={handleClick} disabled={disabled}>
      {children}
    </BasicBtnUI>
  );
};
