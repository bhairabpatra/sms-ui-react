import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
function Home() {
  const apiEndpoint = "http://localhost:3000/home";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        console.log("getting froom", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div>
      <div className="image">
      <img src={data[0]?.imgUrl} alt="home" />
      </div>

      <h5>{data[0]?.title}</h5>
      <p>{data[0]?.shortDesc}</p>
      <p>{data[0]?.LongDesc}</p>
    </div>
  );
}

export default Home;
