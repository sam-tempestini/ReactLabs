import React from 'react';
import Envelope from './components/Envelope'
import './App.css';

function App() {

  const fromPerson = {
    name: 'P Bresnahan',
    addressLine1: '987 Kilbreth Lane',
    addressLine2: 'Boston, MA 02118'
  };
  
  const toPerson = {
    name: 'J Callahan',
    addressLine1: '123 West St',
    addressLine2: 'Boston, MA 02118'
  };

  return (
    <div>
      <Envelope toPerson={toPerson} fromPerson={fromPerson} />
    </div>
  );
}

export default App;
