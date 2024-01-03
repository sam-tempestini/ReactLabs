import React from 'react';
import './App.css';
import Greeting from './Greeting';
import LikeButton from './LikeButton';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First App</h1>
        <Greeting />  
        <LikeButton />
      </header>
    </div>
  );
}

export default App;
