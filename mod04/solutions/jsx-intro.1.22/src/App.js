import React from 'react';
import lighthouse from './lighthouse.jpg';
import './App.css';

function App() {
  const title = 'Experimenting with JSX';
  let showGreeting = true;
  
  function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
  }
  
  let user = {
    firstName: 'Dakota',
    lastName: 'Quinn'
  };
  
  const greeting = (
    <h2>
      Hello, {formatName(user)}!
    </h2>
  );
  const changeUser = () => {
    if(user.firstName==='Dakota'){
      user = {
        firstName: 'Devan',
        lastName: 'Marie'
      }
    }
    else {
      user = {
        firstName: 'Dakota',
        lastName: 'Quinn'
      }
    }
    console.log(user);
    showGreeting = !showGreeting;    
  }
  return (
    <React.Fragment>

      <img src={lighthouse} className="img" alt="Lighthouse"/>
      <h1>{title}</h1>
    
      {
        showGreeting && greeting 
      }
   
      <button className={showGreeting===true?'btn-blue':'btn-red'} onClick={changeUser}>
          change user
      </button>

    </React.Fragment>
  );
}

export default App;
