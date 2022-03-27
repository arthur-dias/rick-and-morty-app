import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import Character from './pages/Character/Character'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<Character />} />
      </Routes>
    </div>
  )
}

export default App
