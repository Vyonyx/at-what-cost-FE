import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Dashboard from './pages/Dashboard'
import Instructions from './pages/Instructions'

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Layout>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Dashboard /> } />
            <Route path='/instructions' element={ <Instructions /> } />
          </Routes>
          </BrowserRouter>
        </Layout>
      </CssBaseline>
    </div>
  )
}

export default App
