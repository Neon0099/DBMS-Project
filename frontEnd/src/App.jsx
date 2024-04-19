// import React, { useEffect, useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
import BranchForm from "./BranchForm";
import BranchTable from "./BranchTable";
import TransactionTable from "./TransactionTable";
import Customer from "./Customer";
import AccountsTable from "./AccountsTable";
import TransactionForm from "./TransactionForm";

function App() {
  return (
    <div>
      <BranchTable />
      <BranchForm />
     <TransactionTable />
     <TransactionForm />
      <Customer />
      <AccountsTable />
      
    </div>
  );
}

export default App;
