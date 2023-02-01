import { Provider } from "react-redux";
import { store } from "../store/store";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Globalstyle from "../styles/global-styles";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Globalstyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
