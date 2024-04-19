import React, { useState } from 'react';

function TransactionForm() {
  const [transactionType, setTransactionType] = useState('');
  const [amount, setAmount] = useState('');
  const [accountFrom, setAccountFrom] = useState('');
  const [accountTo, setAccountTo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8081/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Transaction_type: transactionType,
        Amount: amount,
        Account_from: accountFrom,
        Account_to: accountTo,
      }),
    });

    if (response.ok) {
      alert('Transaction added successfully');
    } else {
      alert('Error adding transaction');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Transaction Type:
        <input type="text" value={transactionType} onChange={(e) => setTransactionType(e.target.value)} required />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>
      <label>
        Account From:
        <input type="number" value={accountFrom} onChange={(e) => setAccountFrom(e.target.value)} required />
      </label>
      <label>
        Account To:
        <input type="number" value={accountTo} onChange={(e) => setAccountTo(e.target.value)} required />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
