import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Student() {
  const apiEndpoint = "http://localhost:3000/student";
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        console.log("getting froom", res.data);
        setStudent(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const array = student.map((student) => {
    return (


      <tr>
        <td> <Link to={`${student.id}`} > {student.id} </Link></td>
        <td>{student.name}</td>
        <td>{student.gender}</td>
        <td>{student.phone}</td>
        <td>{student.email}</td>
        <td>{student.registrationId}</td>
        <td><button className="btn btn-primary">Edit</button></td>
        <td><button className="btn btn-danger">Delete</button></td>
        <td><button className="btn btn-success">Create</button></td>
      </tr>
    );
  });
  return (
    <div>
      <h3>Student</h3>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Registration Id</th>
            <th>Edit</th>
            <th>Delte</th>
            <th>Create</th>
          </tr>
        </thead>
        <tbody>{array}</tbody>
      </table>
    </div>
  )
}

export default Student