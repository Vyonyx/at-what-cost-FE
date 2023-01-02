import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Instructions from './pages/Instructions'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Dashboard /> } />
        <Route path='/instructions' element={ <Instructions /> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
