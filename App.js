import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user';
import DataArt from './components/baza';


function App() {
  return (
    <div>
            <h1>One User number 2</h1>
           <User DataArt={DataArt[2]} />
    </div>
  );
} 

export default App;
