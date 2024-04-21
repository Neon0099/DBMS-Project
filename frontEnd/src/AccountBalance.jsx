import React, { useState } from 'react';

function AccountBalanceForm() {
  const [accountId, setAccountId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="my-8"> {/* Added margin top and bottom */}
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="block mb-2 text-medium font-medium text-gray-700 pb-4">Check Account Balance</h2>
        <div className="mb-4">
          <label htmlFor="accountId" className="block mb-2 text-sm font-medium text-gray-700">Account ID:</label>
          <input
            id="accountId"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg"
          type="submit"
        >
          Check Balance
        </button>
      </form>
    </div>
  );
}

export default AccountBalanceForm;
