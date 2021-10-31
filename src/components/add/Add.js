import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Add = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://creepy-blood-44513.herokuapp.com/add", data)
      .then((result) => {
        if (result.data.acknowledged) {
          alert("successfully added");
          reset();
        }
      });
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary"> Add service </h1>
      <hr className="w-50 mx-auto" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name"> Service img :</label>
        <input type="url" {...register("img")} required />

        <label htmlFor="name"> Service name :</label>
        <input {...register("name")} required />

        <label htmlFor="name"> Service Price :</label>
        <input {...register("price")} required />

        <label htmlFor="name"> Service description :</label>
        <textarea {...register("description")} required />
        <input type="submit" className="btn btn-primary" value="Add service" />
      </form>
    </div>
  );
};

export default Add;
