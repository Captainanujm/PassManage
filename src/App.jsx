import React from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
const App = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <div class="absolute top-0 z-[-2] h-screen w-screen
    bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <Navbar/>
      <Manager/>
    </div>
  )
}

export default App
