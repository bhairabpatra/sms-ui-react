import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Teacher() {

  const apiEndpoint = " http://localhost:3000/teacher";
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        console.log("getting froom", res.data);
        setTeacher(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const array = teacher.map((teacher) => {
    return (
      <tr>
        <td> <Link to={`${teacher.id}`} > {teacher.id} </Link></td>
        <td>{teacher.name}</td>
        <td>{teacher.phone}</td>
        <td>{teacher.email}</td>
        <td>{teacher.qualification}</td>
        <td>{teacher.subject}</td>
        <td><button className="btn btn-primary">Edit</button></td>
        <td><button className="btn btn-danger">Delete</button></td>
        <td><button className="btn btn-success">Create</button></td>
      </tr>
    );
  });

  return (
    <div>
    <h3>Teacher</h3>
    <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Quaification</th>
            <th>Subject</th>
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

export default Teacher