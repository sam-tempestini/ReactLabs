import React from 'react'; 
import uuid from 'uuid';

const AddTransaction = () => {
    

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        const newTransaction = {
            id: uuid(),
            type,
            amount: +amount
          }
      
          addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="type">Type</label>
                <select value={type} onChange={handleTypeChange}>
                    <option value="deposit">deposit</option>
                    <option value="withdraw">withdraw</option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount</label>
                <input type="number" min={0} value={amount} onChange={handleAmountChange} placeholder="Enter amount..." />
            </div>
            <button className="btn" disabled={amount<=0}>Add transaction</button>
            </form>
        </>
    )

}
export default AddTransaction;