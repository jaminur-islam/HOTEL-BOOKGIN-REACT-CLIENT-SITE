import React, { useEffect, useState } from "react";
import Service from "../service/Service";
const axios = require("axios").default;

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://creepy-blood-44513.herokuapp.com/services")
      .then((result) => {
        setServices(result.data);
      });
  }, []);

  return (
    <div className="container" id="service">
      <h1 className="mt-5 text-center  ">Our services </h1>
      <hr className="w-25 mx-auto" />
      <div className="row">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
