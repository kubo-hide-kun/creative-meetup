import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";

import { fetchWord } from "utils/fetchWord";

import { BasicBtn } from "components/BasicBtn";
import { BasicInput } from "components/BasicInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
`;

const GenerateResultDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 126px;
  margin-bottom: 24px;
  border: 1px solid #e1e5e7;
  background: #fbf9f5;
  color: #2b546a;
  font-weight: bold;
  font-size: 4rem;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
`;

const NameInput = styled(BasicInput)`
  width: 600px;
  margin-bottom: 32px;
`;

const GenerateBtn = styled(BasicBtn)`
  width: 196px;
`;

export const WordGenerator: React.VFC = () => {
  const [name, setName] = useState("");
  const [word, setWord] = useState("");

  useEffect(() => {
    const beforeName = localStorage.getItem("oekaki-user");
    if (!!beforeName) {
      setName(beforeName);
    }
  }, []);

  const handleClickGenerateBtn = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleGenerateBtnClick = () => {
    if (!name) {
      return;
    }
    const f = async () => {
      const fetchedWord = await fetchWord(name);
      setWord(fetchedWord);
    };
    f();
    localStorage.setItem("oekaki-user", name);
  };

  return (
    <Container>
      <GenerateResultDiv>{word}</GenerateResultDiv>
      <NameInput
        value={name}
        placeholder="ユーザー名 (個人が特定できるもの)"
        onChange={handleClickGenerateBtn}
      />
      <GenerateBtn onClick={handleGenerateBtnClick} canClick={!!name}>
        単語を生成する
      </GenerateBtn>
    </Container>
  );
};
