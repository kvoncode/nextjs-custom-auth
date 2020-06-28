import "normalize.css";
import Router from "next/router";
import { Navbar } from "../components/Navbar";
import { Spinner } from "../components/Spinner";
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
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentDidMount() {
    Router.events.on("routeChangeStart", () => {
      this.setState({ loading: true });
    });
    Router.events.on("routeChangeComplete", () => {
      this.setState({ loading: false });
    });
    Router.events.on("routeChangeError", () => {
      this.setState({ loading: false });
    });
  }

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
            href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@600&family=Open+Sans&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <ThemeProvider theme={theme}>
          <Navbar></Navbar>
          {this.state.loading ? (
            <Spinner></Spinner>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
      </>
    );
  }
}
