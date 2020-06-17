import "normalize.css";
import { Navbar } from "../components/Navbar";

import App from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

const theme = {
  colors: {
    primary: "#3b3b3b",
    secondary: "#35aaf2",
    tertiary: "#e9f0f5",
    quaternary: "white",
  },
};

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Next.js Custom Auth</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <ThemeProvider theme={theme}>
          <Navbar></Navbar>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
