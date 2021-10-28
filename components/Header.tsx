import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TitleHead = styled.h1`
  font-family: "Meiryo UI", Meiryo, "MS PGothic", sans-serif;
  font-weight: bold;
  color: #30c8d6;
  padding: 32px 0 16px;
  font-size: 2rem;
`;

export const Header: React.VFC = () => {
  return (
    <HeaderDiv>
      <TitleHead>お題ジェネレーター</TitleHead>
    </HeaderDiv>
  );
};
