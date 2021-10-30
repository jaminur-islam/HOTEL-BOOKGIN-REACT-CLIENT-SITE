import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Book = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  useEffect(() => {
    axios.get(`http://localhost:5000/services/${id}`).then((result) => {
      setService(result.data);
    });
  }, []);

  const history = useHistory();
  const bookHandle = (id) => {
    service.nameis = user.displayName;
    service.req = "Pending";
    delete service._id;
    console.log(service);
    axios.post(`http://localhost:5000/mybook`, service).then((result) => {
      history.push("/mybook");
      alert("Booking successfully");
    });
  };

  const { img, name, price, description, _id } = service || {};
  return (
    <div className="container">
      <h1 className="mt-3"> Booking place </h1>
      <hr className="w-25" />
      <div className="col-lg-6">
        <div className="m-3 p-4 border">
          <img className="w-100" src={img} alt="" />
          <h3 className="text-success"> {name} </h3>
          <h4 className="text-etalic">
            <input type="radio" name="ss" />
            <i className="text-primary"> 3 days</i> $ {price}
          </h4>
          <h4 className="text-etalic">
            <input type="radio" name="ss" />
            <i className="text-primary"> 7 days</i> $ {price * 2 - 100}
          </h4>
          <h4 className="text-etalic">
            <input type="radio" name="ss" />
            <i className="text-primary"> 1 month</i> $ {price * 3 - 200}
          </h4>
          <p>
            {description} There are many more facilities at our hotel, We cater
            to our customers as much as possible, which is why our hotel has
            such a good reputation.
          </p>
          <button
            onClick={() => bookHandle(_id)}
            className="btn btn-primary fs-5 px-4"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
