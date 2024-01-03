import React from 'react';

const Breakdown = () => {

  const deposits = transactions.filter(isDeposit);
  const depAmounts = deposits.map(dep => dep.amount);

  const withdrawals = transactions.filter(isWithdrawal);
  const witAmounts = withdrawals.map(wit => wit.amount);

  


  const deposit = depAmounts.reduce((acc, item) => (acc += Math.abs(item)), 0);

  const withdraw = witAmounts.reduce((acc, item) => (acc += Math.abs(item)), 0);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Deposits</h4>
            <p className="money plus">{deposit}</p>
        </div>
        <div>
            <h4>Withdrawals</h4>
            <p className="money minus">{withdraw}</p>
        </div>
    </div>
  )
}

export default Breakdown;