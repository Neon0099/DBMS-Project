import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <ul className="flex space-x-6">
        <li>
          <a href="/branches" className="text-white hover:text-gray-300 text-lg font-medium">Branches</a>
        </li>
        <li>
          <a href="/transactions" className="text-white hover:text-gray-300 text-lg font-medium">Transactions</a>
        </li>
        <li>
          <a href="/customers" className="text-white hover:text-gray-300 text-lg font-medium">Customers</a>
        </li>
        <li>
          <a href="/accounts" className="text-white hover:text-gray-300 text-lg font-medium">Accounts</a>
        </li>
      </ul>
      <span className="text-white text-lg font-medium">Group 16</span>
    </nav>
  );
}

export default Navbar;

