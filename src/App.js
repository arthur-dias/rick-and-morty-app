import { Route, Routes } from 'react-router-dom'

// Components
import Home from './pages/Home/Home'

// Styles
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
