import React from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Password from './components/Password'
const App = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <Navbar/>
      <Password/>
    </div>
  )
}

export default App
