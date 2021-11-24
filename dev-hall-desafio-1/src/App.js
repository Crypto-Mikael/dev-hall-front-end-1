import React from 'react';
import { Header, Hero, About, Form } from './components';
import './styles/App.css';

function App() {
  return(
    <div className="main-container">
      <Header />
      <Hero />
      <About />
      <Form />
    </div>
  );
}

export default App;