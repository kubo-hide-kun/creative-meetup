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

const SubTitleHead = styled.div`
  margin-bottom: 32px;
  color: #2b546a;
  font-weight: bold;
  font-size: 1rem;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
`;

export const Header: React.VFC = () => {
  return (
    <HeaderDiv>
      <TitleHead>お題ジェネレーター</TitleHead>
      <SubTitleHead>運営側で「どのユーザー」に「どのお題」が割り振られたかを確認します</SubTitleHead>
    </HeaderDiv>
  );
};
