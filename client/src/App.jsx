/** @format */

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='text-3xl font-bold underline text-red-800 text-center'>
          Hello world!
        </h1>
      </div>
    </div>
  );
}

export default App;