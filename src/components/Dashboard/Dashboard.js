import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

function Dashboard({ match }) {
  return (
    <div className="container p-3">
      <h3>Dashboard</h3>
      <div className="row">
        <div className="col-md-3">
          <div className="tpic-links text-body">
          <ul className="dashboard-links"> 
            <li>
              <Link to="courses" className="nav-inks">Courses</Link>
            </li>
            <li>
              <Link to="student" className="nav-inks"> Student</Link>
            </li>
            <li>
              <Link to="teacher" className="nav-inks">Teacher</Link>
            </li>
            <li>
              <Link to="user" className="nav-inks">User</Link>
            </li>
          </ul>
          </div>
        </div>
        <div className="col-md-9">
          <Outlet />
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
