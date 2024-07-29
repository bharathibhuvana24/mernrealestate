
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Profile from './Components/pages/Profile'
import SignIn from './Components/pages/SignIn'
import SignUp from './Components/pages/SignUp'
import Header from './Components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/sign-in' element={ <SignIn /> } />
      <Route path='/sign-up' element={ <SignUp/> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/profile' element={ <Profile /> } />
    </Routes>
    </BrowserRouter>
  )
}
