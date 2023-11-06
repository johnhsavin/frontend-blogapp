import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';


function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
