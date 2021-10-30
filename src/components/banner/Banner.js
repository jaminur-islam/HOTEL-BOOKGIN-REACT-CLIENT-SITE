import React from "react";
import img from "../../banner-img/img-1.jpg";
import img2 from "../../banner-img/img-2.jpg";
import img3 from "../../banner-img/img-3.jpg";

const Banner = () => {
  return (
    <div>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-container"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fs-2">In front of the room</h5>
                <p className="fs-4">
                  A wonderful place, where you can sit and spend time, your mind
                  will be filled with this scene
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fs-2">External site</h5>
                <p className="fs-4">
                  This is the outer side of our hotel, here comes a swimming
                  pool
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fs-2 ">Seating place</h5>
                <p className="fs-4">
                  This is a beautiful place for us to sit, you can sit here and
                  relax
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
