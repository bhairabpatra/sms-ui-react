import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Registartion = () =>{
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const handelEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value);
  };
  const handelPswd = (e) => {
    e.preventDefault()
    setPswd(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault()
    console.log('Email: ', email);
    console.log('Password: ', pswd);
      
      if((email === "admin") && (pswd === "123")){

        localStorage.setItem("token", 'true');
        console.log("login successful")
        navigate('/dashboard');
        window.location.reload(false);

 

      }else{
        console.log("login unsucceful")
      }
    
      
  };

  return (
    <div>
      <div className="form">
        <div className="cntainer p-5">
          <from >
            <div className="mb-3 mt-3">
                <label className="form-label">
                    Email:
                </label>
                <input type="email" 
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                      name="email"
                      value={email}
                      onChange={handelEmail}/>

            </div>
            <div className="mb-3 m">
                <label  className="form-label">
                    Password:
                </label>
                <input type="Password" 
                       className="form-control"
                       id="pswd"
                       placeholder="Enter Password"
                       name="pswd"
                       value={pswd}
                       onChange={handelPswd}/>

            </div>
            <button type="submit" onClick = {handelSubmit} className="btn btn-primary">
                submit
            </button>

          </from>
        </div>
      </div>
    </div>
  );
}

export default Registartion;
