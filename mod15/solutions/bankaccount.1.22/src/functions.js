export function isDeposit(trans){
    if(trans.type === 'deposit')
      return trans;  
  }
  export function isWithdrawal(trans){
    if(trans.type === 'withdraw')
      return trans;  
  }