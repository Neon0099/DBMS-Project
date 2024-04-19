import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const TransactionTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/Customer")
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
  return (<div></div>);
};

export default TransactionTable;
