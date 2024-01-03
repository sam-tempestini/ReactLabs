import React, {useContext} from 'react';
import {GlobalContext} from '../GlobalContext';
import '../App.css';

const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.type === 'deposit' ? '+' : '-';
    
    return (
        <li className={transaction.type === 'deposit' ? 'plus' : 'minus'}>
            {transaction.type}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>
                x
            </button>
        </li>

    )
}


export default Transaction;