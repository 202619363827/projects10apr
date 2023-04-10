import React, { useState } from "react";

const CreateSt = () => {
  const [number, setNumber] = useState(0); // State to store the number
  const [tableData, setTableData] = useState([]); // State to store the table data

  // Function to generate table data
  const generateTableData = () => {
    const data = [];
    for (let i = 1; i <= 10; i++) {
      data.push({
        number: i,
        value: Math.floor(Math.random() * 100) + 1 // Generate random value between 1 and 100
      });
    }
    setTableData(data);
  };

  // Function to update state with a random value
  const updateNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1); // Generate random value between 1 and 100
  };

  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={updateNumber}>Update Number</button>
      <br />
      <button onClick={generateTableData}>Generate Table</button>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.number}</td>
              <td>{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateSt;
