import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import BranchForm from "./BranchForm";

function BranchTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/branch")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((item, index) => ({ id: index, ...item }));
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    { field: "Branch_id", headerName: "ID", width: 70 },
    { field: "Branch_name", headerName: "Branch Name", width: 150 },
    { field: "Location", headerName: "Branch Location", width: 150 },
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
      <BranchForm />
    </div>
  );
}

export default BranchTable;
