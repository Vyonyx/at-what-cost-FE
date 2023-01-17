import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { store } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F2F2F2",
      contrastText: "#000000",
    },
    secondary: {
      main: "#666fff",
    },
    background: {
      default: "#232121",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Provider store={store}>
              <App />
            </Provider>
          </CssBaseline>
        </ThemeProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
