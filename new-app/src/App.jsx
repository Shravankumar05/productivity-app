import { useState } from 'react';
import './App.css';
import React from 'react';
import Home from './Home';
import './App.css'; // This is correct for non-modular CSS

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  )
}

export default App
