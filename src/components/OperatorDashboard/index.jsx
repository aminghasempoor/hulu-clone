import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import DataTable from "./DataTable";
import { GET_ALL_USERS } from "@/core/data/apiRoutes";
import useUser from "@/libs/app/hooks/useUser";

const OperatorDashboardComponent = () => {
  const [data, setData] = useState([]);
  const { token } = useUser();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(GET_ALL_USERS, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    console.log(data);

    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      { Header: "Header 1", accessor: "field1" },
      { Header: "Header 2", accessor: "field2" },
      // Add more columns as needed
    ],
    []
  );

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Data Table</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default OperatorDashboardComponent;
