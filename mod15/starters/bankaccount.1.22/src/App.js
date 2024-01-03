import React from 'react';
import Header from './components/Header';
import './App.css';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Breakdown from './components/Breakdown';

function App() {
  return (
      
      <article>
        <Header />
        <div className="container">
          <Balance />
          <Breakdown />
          <TransactionList />
          <AddTransaction />
        </div>
      </article>
    
  );
}

export default App;
