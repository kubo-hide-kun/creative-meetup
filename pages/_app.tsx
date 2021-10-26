import Head from "next/head";
import styled from "styled-components";
import { AppProps } from "next/app";

import { Header } from "components/Header";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: 124px;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
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
        <NavigationContainer>
          <NavigationItem
            href="https://github.com/kubo-hide-kun/creative-meetup"
            target="_blank"
          >
            【GitHub】 クライアント
            <br />
            Next.js + TS + styled-components
          </NavigationItem>
          <NavigationItem
            href="https://github.com/kubo-hide-kun/creative-meetup-serverless"
            target="_blank"
          >
            【GitHub】 バックエンド
            <br />
            Node.js + Lambda + DynamoDB + ServerlessFramework
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
