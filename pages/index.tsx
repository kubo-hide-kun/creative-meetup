import { useState, useEffect, useMemo, ChangeEvent } from "react";
import styled from "styled-components";

import { BasicBtn } from "components/BasicBtn";
import { BasicInput } from "components/BasicInput";
import { useFetch } from "hooks/useFetch";

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
  box-sizing: border-box;
  background: #fbf9f5;
  color: #2b546a;
  font-weight: bold;
  font-size: 2rem;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
`;

const NameInput = styled(BasicInput)`
  width: 92%;
  max-width: 600px;
  margin-bottom: 32px;
`;

const GenerateBtn = styled(BasicBtn)`
  width: 196px;
`;

const HOME: React.VFC = () => {
  const [username, setUserName] = useState("");
  const { result, isLoading, startFetch } = useFetch(
    "https://o66nqaepga.execute-api.ap-northeast-1.amazonaws.com/dev/getWord"
  );
  const word = useMemo(() => result?.word || "", [result]);
  const disabled = useMemo(() => !username || isLoading, [username, isLoading]);

  useEffect(() => {
    const beforeName = localStorage.getItem("oekaki-user");
    if (!!beforeName) {
      setUserName(beforeName);
    }
  }, []);

  const handleClickGenerateBtn = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const handleGenerateBtnClick = () => {
    if (disabled) {
      return;
    }
    localStorage.setItem("oekaki-user", username);
    startFetch({
      method: "POST",
      body: JSON.stringify({ username }),
    });
  };

  return (
    <Container>
      <GenerateResultDiv>
        {isLoading && "ロード中 ..."}
        {word}
      </GenerateResultDiv>
      <NameInput
        value={username}
        placeholder="ユーザー名 (個人が特定できるもの)"
        onChange={handleClickGenerateBtn}
      />
      <GenerateBtn onClick={handleGenerateBtnClick} disabled={disabled}>
        単語を生成する
      </GenerateBtn>
    </Container>
  );
};

export default HOME;
