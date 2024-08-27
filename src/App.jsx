// npm modules
import { Route, Routes } from 'react-router-dom'

// components
import NavBar from './NavBar/NavBar'
import StarShips from './pages/starship/StarShips'
import StarShipCard from './pages/starshipCard/StarShipCard'

import './App.css'

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path = '/' element = {<StarShips />} />
        <Route path = 'starships/:id' element ={<StarShipCard />} />
      </Routes>
    </>
  )
}


export default App
