import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TeacherDetails() {
  const { id } = useParams();
  const apiEndpoint = " http://localhost:3000/teacher/";
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(apiEndpoint.concat(id))
      .then((response) => {
        setItem(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h3>TeacherDetails {id}</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Gender</th>
            <th>Review</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {item.gender}</td>
            <td>{item.review}</td>
            <td>{item.subject}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TeacherDetails;
