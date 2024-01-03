import React, {useContext} from 'react';
import {isDeposit, isWithdrawal} from '../functions';
import {GlobalContext} from '../GlobalContext';

 const Balance = () => {
    const { transactions } = useContext(GlobalContext);


      const deposits = transactions.filter(isDeposit);
      const depAmounts = deposits.map(dep => dep.amount);

      const withdrawals = transactions.filter(isWithdrawal);
      const witAmounts = withdrawals.map(wit => wit.amount);


    
      const deposit = depAmounts.reduce((acc, item) => (acc += (item)), 0);    
      const withdraw = witAmounts.reduce((acc, item) => (acc += Math.abs(item)), 0);
    

    const total = deposit - withdraw;

    const fColor = (total >= 0 ? '#000' : 'red')
    return (
        <>
            <h4>Your Balance</h4>
            <h1 style={{'color':fColor}}>${total}</h1>
        </>
    )
    
}
export default Balance;