import React, { useEffect, useState } from "react";
import instance from "../axios";
import "./Testimonial.css";
function Testimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    instance.get("/reviews").then((res) => setReviews(res.data));
  }, []);

  return (
    <div className=" m-5 p-5">
      <h1 className="text-center mb-5 pb-5">
        Clients <span style={{ color: "#7AB259" }}>feedback</span>{" "}
      </h1>

      <div className="testimonials">
        {reviews.map((review) => (
          <div className="testimonial">
            <div className="testimonial__info mb-3">
              <img
                className="testimonial__icon img-fluid"
                src={
                  review.img
                    ? require(`../../images/${review?.img}`)
                    : `https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg`
                }
                alt=""
              />
              <div className="testimonial__infoHeader">
                <h3 className="text-center ml-3 mb-1">{review.name}</h3>
                <h5 className="text-center ml-3">{review.title}</h5>
              </div>
            </div>

            <p style={{ width: "100%" }}>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
