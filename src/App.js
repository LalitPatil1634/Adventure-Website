import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './components/pages/Home'
import Services from './components/pages/Service/Services'
import About from './components/pages/About/About';
// import SignUp from './components/pages/SignUp';


function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element=
            {<Home />} />
          <Route path='/services' exact element=
            {<Services />} />
          <Route path='/products' exact element=
            {<About />} />
          {/* <Route path='/sign-up' exact element=
            {<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
