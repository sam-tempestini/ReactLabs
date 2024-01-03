import React from 'react';
import Envelope from './components/Envelope'


export default class App extends React.Component {

  
  render(){
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
}


