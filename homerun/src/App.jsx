import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/product/:id" element={<ProductCard />} /> */}
      </Routes>
    </div>
  )
}

export default App
