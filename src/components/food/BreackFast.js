import axios from "axios";
import React, { useEffect, useState } from "react";
import './food.css'

const BreackFast = () => {
  const category = "breakfast";
  const [fast, setFast] = useState([]);
  useEffect(() => {
    axios
      .get(`https://creepy-blood-44513.herokuapp.com/food/${category}`)
      .then((result) => {
        setFast(result.data);
      });
  }, []);
  return (
    <div className="row text-center">
      {fast.map((fst) => {
        return (
          <div key={fst.id} className="col-lg-4 col-md-6 col-12 text-center">
            <div className="coll m-2 p-5 border box-shadow food">
              <img width="250" src={fst.img} alt="" />
              <h5 className="text-success mt-2"> {fst.name}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BreackFast;
