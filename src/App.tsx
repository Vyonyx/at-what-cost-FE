import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Callback from './pages/Callback'
import Dashboard from './pages/Dashboard'
import Instructions from './pages/Instructions'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={ <Instructions /> } />
          <Route path='/tool' element={ <Dashboard /> } />
          <Route path='/callback' element={ <Callback /> } />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
