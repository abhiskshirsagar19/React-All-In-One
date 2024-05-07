import React from "react";
import Table from 'react-bootstrap/Table';
export default function BootstrapTabel() {
  const tabelData = [
    { id: 1, name: "John", age: 30, location: "Banglore" },
    { id: 2, name: "John", age: 30, location: "Nashik" },
    { id: 3, name: "John", age: 30, location: "Nagpur" },
    { id: 4, name: "John", age: 30, location: "Pune" },
  ];
  return (
    <>
      <div>Bootstrap Table</div>
      <div>
        <Table striped bordered hover variant="dark" size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {tabelData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.location}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
