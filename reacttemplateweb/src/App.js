import React from 'react';
import NavBar from './Components/NavBar';
import MastHead from './Components/MastHead';
import Portfolio from "./Components/Portfolio";
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
    <NavBar/>
    <MastHead/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
