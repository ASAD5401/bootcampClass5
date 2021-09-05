import logo from './logo.svg';
import './App.css';
import Parent from './parent'
import CounterContext from './CounterContext'
import { useState } from 'react';


function App() {
let count=useState(0)

  return (

    <CounterContext.Provider value={count}>
      <div>


        <Parent></Parent>
      </div>

    </CounterContext.Provider>


  );
}

export default App;
