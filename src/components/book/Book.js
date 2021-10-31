import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import "./book.css";
const Book = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(`https://creepy-blood-44513.herokuapp.com/services/${id}`)
      .then((result) => {
        setService(result.data);
      });
  }, []);

  // form control
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.orderId = service._id;
    data.status = "Pending";
    axios
      .post(`https://creepy-blood-44513.herokuapp.com/mybook`, data)
      .then((result) => {
        if (result.data.acknowledged) {
          history.push("/mybook");
          reset();
          alert("Your order was successful");
        }
      });
  };
  const { name, description, img, price } = service;
  return (
    <div className="container">
      <h1 className="mt-3 text-center"> Booking place </h1>
      <hr className="w-25 mx-auto" />
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="m-3 p-4 border">
            <img className="w-50" src={img} alt="" />
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
              {description} There are many more facilities at our hotel, We
              cater to our customers as much as possible, which is why our hotel
              has such a good reputation.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name"> Your name:</label>
            <input
              defaultValue={user.displayName}
              {...register("name")}
              required
            />
            <label htmlFor="email"> Your email :</label>
            <input defaultValue={user?.email} {...register("email")} required />
            <label htmlFor="data"> Date : </label>
            <input type="date" {...register("date")} required />
            <label htmlFor="home">Home :</label>
            <input {...register("home")} required />
            <label htmlFor="description"> Description</label>
            <textarea {...register("des")} />
            <input
              className="btn btn-primary"
              type="submit"
              value="Booking now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
