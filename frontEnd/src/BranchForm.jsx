import React, { useState } from 'react';

function BranchForm() {
  const [branchId, setBranchId] = useState('');
  const [branchName, setBranchName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8081/branch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Branch_id: branchId,
        Branch_name: branchName,
        Location: location,
      }),
    });
    console.log(response);
    console.log({branchId,branchName,location});
    if (response.ok) {
      alert('Branch added successfully');
    } else {
      alert('Error adding branch');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Branch ID:
        <input type="number" value={branchId} onChange={(e) => setBranchId(e.target.value)} required />
      </label>
      <label>
        Branch Name:
        <input type="text" value={branchName} onChange={(e) => setBranchName(e.target.value)} required />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </label>
      <button type="submit">Add Branch</button>
    </form>
  );
}

export default BranchForm;
