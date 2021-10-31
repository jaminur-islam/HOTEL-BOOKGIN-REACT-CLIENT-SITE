import React, { useState } from "react";
import BreackFast from "./BreackFast";
import Dinner from "./Dinner";
import Lunch from "./Lunch";
import "./food.css";

const Foods = () => {
  const [food, setFood] = useState("fast");
  return (
    <div className="container my-5 text-center">
      <h1> Food items </h1>
      <hr className="w-25 mx-auto mb-5" />
      <div>
        <div className="button-container">
          <button
            onClick={() => setFood("fast")}
            className={food == "fast" ? "active" : ""}
          >
            BreakFast
          </button>
          <button
            onClick={() => setFood("lunch")}
            className={food == "lunch" ? "active" : ""}
          >
            Lunch
          </button>
          <button
            onClick={() => setFood("dinner")}
            className={food == "dinner" ? "active" : ""}
          >
            Dinner
          </button>
        </div>
        <div className="food-container">
          {food === "fast" && <BreackFast></BreackFast>}

          {food === "dinner" && <Dinner></Dinner>}

          {food === "lunch" && <Lunch></Lunch>}
        </div>
      </div>
    </div>
  );
};

export default Foods;
