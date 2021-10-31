import axios from "axios";
import React, { useEffect, useState } from "react";

const Manage = () => {
  const [is, setIs] = useState(0);
  const [orderr, setOrderr] = useState([]);
  useEffect(() => {
    axios
      .get("https://creepy-blood-44513.herokuapp.com/orders")
      .then((result) => {
        setOrderr(result.data);
      });
  }, [is]);

  const cancelHandle = (id) => {
    const process = window.confirm("Are you sure you want to cancel it?");
    if (process) {
      axios
        .delete(`https://creepy-blood-44513.herokuapp.com/order/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            const newOrder = orderr.filter((order) => order._id !== id);
            setOrderr(newOrder);
          }
        });
    }
  };

  const handleAccept = (id) => {
    axios
      .put(`https://creepy-blood-44513.herokuapp.com/order/${id}`)
      .then((result) => {
        if (result.data) {
          setIs(1);
          // window.location.reload();
        }
      });
  };
  let num = 1;

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table caption-top container px-2">
          <caption className="fs-1">All order list </caption>
          <thead>
            <tr>
              <th scope="col">Sl</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
              <th scope="col"> Data </th>
              <th scope="col"> Status </th>
              <th scope="col"> Delete </th>
              <th scope="col"> To accept </th>
            </tr>
          </thead>
          {orderr?.map((order) => {
            return (
              <tbody key={order._id}>
                <tr>
                  <th scope="row">{num++}</th>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.home}</td>
                  <td>{order.date}</td>
                  <td
                    className={
                      order.status == "Approve" ? "text-success" : "text-danger"
                    }
                  >
                    {order.status}
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => cancelHandle(order._id)}
                      className="border-0 bg-danger text-white fs-6"
                    >
                      {" "}
                      Cancel{" "}
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="border-0 text-white bg-success fs-6"
                      onClick={() => handleAccept(order._id)}
                    >
                      {" "}
                      Accept{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Manage;
