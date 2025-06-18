import { useState } from 'react'
import Navabar from './components/Navabar'
import Hero from './components/hero';
import Events from "./components/Events";
import Footer from "./components/Footer";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navabar />
      <Hero />
      <Events />
      
      
      <Footer />
      
    </>
  )
}

export default App
