import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const locationis = location?.state?.from?.pathname || "/home";

  const { googleSign, setLoading } = useAuth();
  const handleGoogle = () => {
    setLoading(true);
    googleSign()
      .then((result) => {
        history.push(locationis);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-success"> Login now </h1>
      <hr className="w-25 text-success mx-auto" />
      <button
        className="btn btn-primary fs-5 text-white"
        onClick={handleGoogle}
      >
        <i className="fab fs-4 text-dark fa-google-plus-g"></i> log in with
        google{" "}
      </button>
    </div>
  );
};

export default Login;
