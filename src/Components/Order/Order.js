import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import instance from "../axios";
import { useStateValue } from "../StateProvider";
import "./Order.css";
function Order() {
  const [myOrders, setMyOrders] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    clientName: "",
    clientEmail: "",
    details: "",
    price: "",
  });
  const [reviewInfo, setReviewInfo] = useState({
    title: "",
    description: "",
  });

  const [{ user, orders }, dispatch] = useStateValue();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await instance.post("/orders/new", {
      clientName: user.displayName,
      clientEmail: user.email,
      details: orderInfo.details,
      price: orderInfo.price,
      type: orders[orders.length - 1]?.type,
      description: orders[orders.length - 1]?.description,
      icon: orders[orders.length - 1]?.icon,
      status: "Pending",
    });

    history.push("/");
  };

  const handleReview = async (e) => {
    e.preventDefault();

    await instance.post("/reviews", {
      name: user.displayName,

      title: reviewInfo.title,
      description: reviewInfo.description,
    });

    history.push("/");
  };

  useEffect(() => {
    instance.get("/orders/sync?name=" + user.displayName).then((res) => {
      setMyOrders(res.data);
      console.log(myOrders);
    });
  }, []);

  const [toggleValue, setToggleValue] = useState(0);
  return (
    <div className="order">
      <div className="order__left">
        <Link to="/">
          <img src={require("../../images/logos/logo.png")} alt="" />
        </Link>
        <p className="order__leftP1" onClick={() => setToggleValue(0)}>
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-people"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
            />
          </svg>
          Order
        </p>
        <p className="order__leftP2" onClick={() => setToggleValue(1)}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          My Orders
        </p>
        <p className="order__leftP3" onClick={() => setToggleValue(2)}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          Review
        </p>
      </div>

      <div className="order__right">
        <div className="order__rightHeader">
          <h1>
            {toggleValue === 0
              ? "Order"
              : toggleValue === 1
              ? "My Orders"
              : "Review"}
          </h1>
          <p>{user?.email}</p>
        </div>

        {toggleValue === 0 ? (
          <form action="" className="order__form">
            <br />
            <input
              type="text"
              value={`${user.displayName}`}
              placeholder="Your Name / Company Name"
            />
            <br />
            <input
              type="email"
              value={`${user.email}`}
              placeholder="Your Email"
            />
            <br />
            <input
              type="text"
              value={`${orders[orders.length - 1]?.type}`}
              placeholder="Project Type"
            />
            <br />
            <textarea
              onBlur={(e) =>
                setOrderInfo({ ...orderInfo, details: e.target.value })
              }
              placeholder="Project Details"
              rows="4"
              cols="50"
            ></textarea>
            <br />
            <br />
            <input
              type="text"
              onBlur={(e) =>
                setOrderInfo({ ...orderInfo, price: e.target.value })
              }
              placeholder="Price"
            />
            <br />
            <button className="btn btn-lg btn-outline-success">
              Upload Project
            </button>
            <br />
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-lg btn-dark"
            >
              Send
            </button>
            <br />
          </form>
        ) : toggleValue === 1 ? (
          <div className="service__listItems">
            {myOrders.map((order) => (
              <div className="serviceListItem">
                <div className="serviceListItem__header">
                  <img
                    src={require(`../../images/icons/${order.icon}`)}
                    alt=""
                  />
                  <button
                    className={
                      order.status === "Pending"
                        ? "btn btn-outline-danger"
                        : order.status === "Done"
                        ? "btn btn-outline-success"
                        : "btn btn-outline-warning"
                    }
                  >
                    {order.status === "Pending"
                      ? "Pending"
                      : order.status === "Done"
                      ? "Done"
                      : "Ongoing"}
                  </button>
                </div>
                <h3>{order.type}</h3>
                <p>{order.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <form action="" className="order__form">
            <br />
            <input
              value={`${user.displayName}`}
              type="text"
              placeholder="Your Name"
            />
            <br />
            <input
              value={`${user.email}`}
              type="email"
              placeholder="Your Email"
            />
            <br />
            <input
              type="text"
              onBlur={(e) =>
                setReviewInfo({ ...reviewInfo, title: e.target.value })
              }
              placeholder="Your designation"
            />
            <br />
            <textarea
              onBlur={(e) =>
                setReviewInfo({ ...reviewInfo, description: e.target.value })
              }
              placeholder="Description"
              rows="4"
              cols="50"
            ></textarea>
            <br />

            <button
              type="submit"
              onClick={handleReview}
              className="btn btn-lg btn-dark"
            >
              Submit
            </button>
            <br />
          </form>
        )}
      </div>
    </div>
  );
}

export default Order;
