import Head from "next/head";
import styled from "styled-components";
import { AppProps } from "next/app";

import { Header } from "components/Header";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: 124px;
`;

const BodyContainer = styled.div`
  position: relative;
  margin-top: 124px;
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>単語ジェネレーター</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <BodyContainer>
        <Component {...pageProps} />
      </BodyContainer>
    </div>
  );
};

export default MyApp;
