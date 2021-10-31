import React from "react";
import { useHistory } from "react-router";
import './service.css'

const Service = (props) => {
  const { name, price, description, _id, rate, img } = props.service;

  // handlebook functoin
  const history = useHistory();
  const handleBook = (id) => {
    history.push(`/book/${id}`);
  };

  return (
    <div className="col-lg-6">
      <div className="m-3 px-2 service">
        <img className="w-100" src={img} alt="" />
        <h3 className="text-success mt-2"> {name} </h3>
        <h4 className="text-etalic">
          <i className="text-primary me-1">Start</i>$ {price}
        </h4>
        <p className="text-uppercase text-dark">{description.slice(0, 140)}</p>

        <button
          onClick={() => handleBook(_id)}
          className="btn btn-primary mb-3 fs-5 px-4"
        >
          <i className="fas fa-dolly-flatbed"></i> Book a room
        </button>
      </div>
    </div>
  );
};

export default Service;
