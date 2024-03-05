// import React from 'react'
import Aboout from './components/Aboout'
import Eyes from './components/Eyes'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Landing />
      <Marquee />
      <Aboout />
      <Eyes />
    </div>
  )
}

export default App