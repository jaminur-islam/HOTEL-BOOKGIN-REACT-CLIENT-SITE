import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Mybook = () => {
  const { user } = useAuth();
  const name = user?.displayName;
  const [myorder, setMyorder] = useState([]);
  useEffect(() => {
    axios
      .get(`https://creepy-blood-44513.herokuapp.com/myorder/${name}`)
      .then((result) => {
        setMyorder(result.data);
      });
  }, [user]);

  const cancelHandle = (id) => {
    const process = window.confirm("Are you sure you want to cancel it?");
    if (process) {
      axios
        .delete(`https://creepy-blood-44513.herokuapp.com/order/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            const newOrder = myorder.filter((order) => order._id !== id);
            setMyorder(newOrder);
            alert("Successfully Canceled");
          }
        });
    }
  };
  let num = 1;
  return (
    <div className="table-responsive">
      <table className="table caption-top container px-2">
        <caption className="fs-1">Your order list </caption>
        <thead>
          <tr>
            <th scope="col">Sl</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
            <th scope="col"> Data </th>
            <th scope="col"> Status </th>
            <th scope="col"> Delete </th>
          </tr>
        </thead>
        {myorder?.map((order) => {
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
                    order.status == "Approve" ? "text-success" : "text-primary"
                  }
                >
                  {order.status}
                </td>
                <td>
                  <button
                    onClick={() => cancelHandle(order._id)}
                    className="border-0 bg-danger text-white fs-6"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Mybook;
