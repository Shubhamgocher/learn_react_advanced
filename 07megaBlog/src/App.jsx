import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Footer, Header, Login, Signup } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <Container>
      <div className='w-full'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </Container>
  )
}

export default App
