import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

// No transactions as of now.

const AccountsTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/account")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((item, index) => ({ id: index, ...item }));
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    { field: "Account_no", headerName: "Account No.", width: 70 },
    { field: "Balance", headerName: "Balance", width: 150 },
    { field: "Account_type", headerName: "Account Type", width: 150 },
    { field: "Branch_id", headerName: "Branch", width: 150 },
    { field: "Customer_id", headerName: "Customer", width: 150 },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { page: 0, pageSize: 5 } }}
        pageSize={5}
        pageSizeOptions={[5]}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default AccountsTable;
