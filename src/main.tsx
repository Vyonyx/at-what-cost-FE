import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { store } from './redux/store'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import Auth0ProviderWithNavigate from './components/Auth0ProviderWithNavigate'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F2F2F2',
      contrastText: '#000000'
    },
    background: {
      default: '#232121'
    }
  }
})

const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN as string
const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID as string

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
  </React.StrictMode>,
)
