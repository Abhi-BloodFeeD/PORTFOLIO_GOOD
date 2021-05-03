// import './App.css';
import React from 'react'
import Header from './Header.js'
import Section from './Section'
import Footer from './Footer'
import Navbar from './Navbar'



function App() {
  return (
      <div className="canvas">
      <Navbar className="canvas__navbar"/>
      <Header className="canvas__header"/>
      <Section className="canvas__section canvas__section--scroll_pics"/>
      <Section className="canvas__section section--scroll_text"/>
      <Footer className="canvas__footer"/>
    </div>
  );
}

export default App;
