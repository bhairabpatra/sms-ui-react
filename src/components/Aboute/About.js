import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function About() {
  const apiEndpoint = " http://localhost:3000/about";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
         console.log(res.data)
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="image col-md-6">
          <img src={data[0]?.imgUrl} alt="about"/>
        </div>
        <div className="col-md-6">
          <h5><b>{data[0]?.title}</b></h5>
          <p>{data[0]?.shortDesc}</p>
          <p>{data[0]?.LongDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
