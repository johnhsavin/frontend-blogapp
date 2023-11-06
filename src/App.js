import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';

import Home from './pages/Home'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './components/Footer'

export const UserContext = createContext()


function App() {
  const [userState, setUserState] = useState({})

  return (

    <BrowserRouter>
    <UserContext.Provider value={{ userState, setUserState }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
