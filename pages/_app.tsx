import { useEffect } from "react";
import { AppProps } from 'next/app'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "../styles/globals.scss";
import "../styles/styles.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const theme = createMuiTheme({
    typography: {
      fontFamily: "Merriweather",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
