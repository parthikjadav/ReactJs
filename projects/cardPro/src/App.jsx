import React from "react"
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Carosule from './components/Carosule';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App() {

  return (
    <>
    <NavBar/>
    <Carosule/>
    <CardContainer>
    <Card/>
    </CardContainer>
    <Footer/>
    </>
  )
}

export default App
