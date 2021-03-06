import { useEffect, useMemo } from "react";
import styled from "styled-components";

import { BasicBtn } from "components/BasicBtn";
import { BasicInput } from "components/BasicInput";
import { useFetch } from "hooks/useFetch";
import { useInput } from "hooks/useInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GenerateResultDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92%;
  max-width: 600px;
  height: 126px;
  margin-bottom: 24px;
  padding: 12px;
  border: 1px solid #e1e5e7;
  border-radius: 4px;
  box-sizing: border-box;
  background: #fbf9f5;
  color: #2b546a;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
`;

const GenerateBtn = styled(BasicBtn)`
  width: 196px;
`;

const HOME: React.VFC = () => {
  const { data, isLoading, startFetch } = useFetch(
    "https://954wheeyrb.execute-api.ap-northeast-1.amazonaws.com/dev/getWord"
  );

  const word = useMemo(() => data?.word || "", [data]);

  const handleGenerateBtnClick = () => {
    startFetch({
      method: "POST",
      body: JSON.stringify({ username: 'no-name' }),
    });
  };

  return (
    <Container>
      <GenerateResultDiv>{isLoading ? "ロード中 ..." : word}</GenerateResultDiv>
      <GenerateBtn onClick={handleGenerateBtnClick}>
        単語を生成する
      </GenerateBtn>
    </Container>
  );
};

export default HOME;
