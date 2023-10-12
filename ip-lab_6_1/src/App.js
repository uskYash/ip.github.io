import React from 'react';
import { BrowserRouter as router, Route, Switch, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </div>
    </Routes>
  );
}

export default App;