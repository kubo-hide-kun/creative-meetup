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

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
`;

const NavigationItem = styled.a`
  margin: 0 24px;
  color: #2b546a;
  font-weight: bold;
  font-size: 1rem;
  font-family: Lato, "Hiragino Maru Gothic Pro", "Meiryo UI", Meiryo,
    "MS PGothic", sans-serif;
  transition: 0.3s;
  &:hover {
    color: #30c8d6;
    text-decoration: none;
  }
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
        <NavigationContainer>
          <NavigationItem
            href="https://github.com/kubo-hide-kun/creative-meetup"
            target="_blank"
          >
            クライアント - Next.js
          </NavigationItem>
          <NavigationItem
            href="https://github.com/kubo-hide-kun/creative-meetup-serverless"
            target="_blank"
          >
            バックエンド - ServerlessFramework
          </NavigationItem>
        </NavigationContainer>
      </HeaderContainer>
      <BodyContainer>
        <Component {...pageProps} />
      </BodyContainer>
    </div>
  );
};

export default MyApp;
