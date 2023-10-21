import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Courses() {
  const apiEndpoint = "http://localhost:3000/courses";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const array = data.map((data) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.branchType}</td>
        <td>{data.branchDescription}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Courses</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>BranchType</th>
            <th>BranchDescription</th>
          </tr>
        </thead>
        <tbody>{array}</tbody>
      </table>
    </div>
  );
}

export default Courses;
