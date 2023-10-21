import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import About from "./components/Aboute/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Navigation from "./Navigation/Navigation";
import Courses from "./components/Courses/Courses";
import Teacher from "./components/Teacher/Teacher";
import Student from "./components/Student/Student";
import PageNotFound from "./components/pagenotfound/PageNotFound";
function App() {
  return (
    <div >
      <Router>
        <Navigation />
        <div className="container App">
          <Routes>
            < Route path="/" exact element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="dashboard" element={<Dashboard />}>
              
              <Route path="courses" element={<Courses/>} />
              <Route path="student" element={<Student />} />
              <Route path="teacher" element={<Teacher/>} />

            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
