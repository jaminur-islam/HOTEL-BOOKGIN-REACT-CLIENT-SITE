import axios from "axios";
import React, { useEffect, useState } from "react";

const Lunch = () => {
  const category = "lunch";
  const [lunch, setLunch] = useState([]);
  useEffect(() => {
    axios
      .get(`https://creepy-blood-44513.herokuapp.com/food/${category}`)
      .then((result) => {
        setLunch(result.data);
      });
  }, []);

  return (
    <div className="row text-center">
      {lunch.map((lun) => {
        return (
          <div key={lun.id} className="col-lg-4 col-md-6 col-12 text-center">
            <div className="coll m-2 p-5 border box-shadow">
              <img width="250" height="250" src={lun.img} alt="" />
              <h5 className="text-success mt-2"> {lun.name}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Lunch;
