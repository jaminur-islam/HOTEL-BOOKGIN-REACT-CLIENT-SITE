import axios from "axios";
import React, { useEffect , useState } from "react";


const Dinner = () => {
  const category = "dinner";
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    axios
      .get(`https://creepy-blood-44513.herokuapp.com/food/${category}`)
      .then((result) => {
        setDinner(result.data);
      });
  }, []);
  return (
    <div className="row text-center">
      {dinner.map((din) => {
        return (
          <div key={din.id} className="col-lg-4 col-md-6 col-12 text-center">
            <div className="coll m-2 p-5 border box-shadow ">
              <img width="250" height="250" src={din.img} alt="" />
              <h5 className="text-success mt-2"> {din.name.slice(0, 25)}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dinner;
