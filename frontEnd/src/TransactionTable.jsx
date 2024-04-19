import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

function TransactionTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/transaction")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((item, index) => ({ id: index, ...item }));
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    { field: "Transaction_id", headerName: "ID", width: 70 },
    { field: "Transaction_type", headerName: "Transaction Type", width: 150 },
    { field: "Amount", headerName: "Amount", width: 150 },
    { field: "Transaction_date", headerName: "Transaction Date", width: 150 },
    { field: "Account_from", headerName: "From", width: 150 },
    { field: "Account_to", headerName: "To", width: 150 },
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
}

export default TransactionTable;
