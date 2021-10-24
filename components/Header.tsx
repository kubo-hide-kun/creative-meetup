import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 48px;
`;

const TitleHead = styled.h1`
  font-family: "Meiryo UI", Meiryo, "MS PGothic", sans-serif;
  font-weight: bold;
  color: #30c8d6;
  margin: 0;
  font-size: 3rem;
`;

export const Header: React.VFC = () => {
  return (
    <HeaderDiv>
      <TitleHead>単語ジェネレーター</TitleHead>
    </HeaderDiv>
  );
};
