import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import BranchForm from "./BranchForm";
import Box from '@mui/material/Box';

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
    { field: "Branch_id", headerName: "ID", width: 500 },
    { field: "Branch_name", headerName: "Branch Name", width: 600 },
    { field: "Location", headerName: "Branch Location", width: 300},
  ];

  return (
    <Box
    sx={{
      height: 400,
      width: '200%',
      '& .super-app-theme--header': {
        backgroundColor: 'rgba(255, 7, 0, 0.55)',
      },
    }}
  >
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { page: 0, pageSize: 5 } }}
        pageSize={5}
        pageSizeOptions={[5]}
        rowsPerPageOptions={[5]}
        
      />
      {/* <BranchForm /> */}
      </Box>
  );
}

export default BranchTable;
