import React from 'react'
import {Link, Outlet } from 'react-router-dom';

function Dashboard({match}) {
  return (

    <div className='container p-3'>
        <h2>Dashboard</h2>
        <div className='row'>
          <div className='col-md-3'>
          <ul>
          <li>
            <Link to="courses">Courses</Link>
          </li>
          <li>
            <Link to="student">Student</Link>
          </li>
          <li> 
            <Link to="teacher">Teacher</Link>
          </li>
        </ul>

          </div>
          <div className='col-md-9'>
            <Outlet />
            
           </div>

        </div>
    
    </div>
  );
}

export default Dashboard

