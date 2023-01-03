import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
)
