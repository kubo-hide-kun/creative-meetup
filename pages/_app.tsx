import Head from "next/head";
import styled from "styled-components";
import { AppProps } from "next/app";

import { Header } from "components/Header";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const BodyContainer = styled.div`
  position: relative;
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>お題ジェネレーター</title>
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
