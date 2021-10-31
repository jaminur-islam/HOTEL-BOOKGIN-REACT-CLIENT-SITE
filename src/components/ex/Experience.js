import React from "react";
import img3 from "../../expert/player-3.png";
import img2 from "../../expert/player-1.png";
import img1 from "../../expert/player-5.png";
import "./ex.css";

const expert = [
  {
    name: "Wilamson",
    work: "Reception Expert",
    des: "He is the same as our hotel As you can see, he is responsible for our acceptance",
    img: img3,
  },
  {
    name: "Devid conner",
    work: "manager",
    des: "He is our old manager, a very good man who has been managing our hotel for almost 20 ",
    img: img2,
  },
  {
    name: "Maxi weleam",
    work: "manager",
    des: "And he is our newly joined manager who took charge of our hotel at a young age",
    img: img1,
  },
];

const Experience = () => {
  return (
    <div className="container" id="about">
      <h2 className="text-center "> Visitors Experienced </h2>
      <hr className="w-25 mx-auto" />
      <div className="row">
        {expert.map((exp) => {
          return (
            <div key={exp.name} className="col-lg-4 my-4">
              <div className="p-4 m-1 ex-container">
                <div>
                  <img height="120" src={exp.img} alt="" />
                  <div>
                    <h5 className="mt-2"> {exp.name} </h5>
                    <h6> {exp.work}</h6>
                    <p>{exp.des}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
