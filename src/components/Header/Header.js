import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";
import "./header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  const history = useHistory();
  const handlelog = () => {
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top full-nav  ">
      <div className="container">
        <i className="fas fa-hotel"></i>
        <a
          className="navbar-brand fs-4 fw-bold text-uppercase text-success"
          href="#"
        >
          Coast Hotels
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto navbar-container">
            <a aria-current="page" href="#">
              Home
            </a>
            <HashLink to="/home#service">Services</HashLink>

            <a href="#">About us</a>

            {user ? <Link to="/mybook">my booking </Link> : ""}

            {user ? <Link to="/manage"> Manage users </Link> : ""}

            {user ? (
              <div className="d-flex align-items-center ">
                <span className="text-white"> {user.displayName} </span>
                <img className="user-img me-2" src={user.photoURL} alt="" />
              </div>
            ) : (
              ""
            )}

            {user ? (
              <button className="logOut-btn" onClick={logOut}>
                Log Out
              </button>
            ) : (
              <button className="longin-btn" onClick={handlelog}>
                Log In
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
