
// import React, { useState } from 'react';

// const One= () => {
//   const [number, setNumber] = useState(0);
//   const [tableData, setTableData] = useState([]);

//   // Function to generate table data
//   const generateTableData = () => {
//     const data = [];
//     for (let i = 1; i <= number; i++) {
//       data.push({ index: i, value: Math.floor(Math.random() * 100) + 1 });
//     }
//     setTableData(data);
//   };

//   // Function to handle button click
//   const handleButtonClick = () => {
//     setNumber(Math.floor(Math.random() * 10) + 1);
//     generateTableData();
//   };

//   return (
//     <div>
//       <h1>Number: {number}</h1>
//       <button onClick={handleButtonClick}>Generate Number and Table</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Index</th>
//             <th>Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map(row => (
//             <tr key={row.index}>
//               <td>{row.index}</td>
//               <td>{row.value}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default One;
