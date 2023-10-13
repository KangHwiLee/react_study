
import './App.css';
// import Component1 from './Component1';
import Header from './layout/Header';
import Home from './layout/Home';
import Footer from './layout/Footer';
import Info from './pages/Info';
import State from './pages/State';
import Param1 from './pages/Param1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Param2 from './pages/Param2';
import { useEffect, useState } from 'react';



function App() {
  const [message, setMessage] = useState("")
  useEffect(()=>{
    fetch("/test")
      .then(res => res.text())
      .then(m=>setMessage(m))
      .then(console.log({message}))
  })

  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/info' element={<Info/>} />
            <Route path='/state' element={<State/>} />
            <Route path='/param/:id' element={<Param1/>} />
            <Route path='/param' element={<Param2/>} />
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
