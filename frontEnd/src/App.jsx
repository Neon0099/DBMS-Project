import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import BranchForm from "./BranchForm";
import BranchTable from "./BranchTable";

function App() {
  return (
    <div>
    <BranchTable />
      <BranchForm />
    </div>
  );
}

export default App;
