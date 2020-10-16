import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import instance from "../axios";
import { useStateValue } from "../StateProvider";
import "./Admin.css";
function Admin() {
  const history = useHistory();
  const [{ user, orders }, dispatch] = useStateValue();
  const [toggleValue, setToggleValue] = useState(0);
  const [allOrders, setAllOrders] = useState([]);
  const [service, setService] = useState({
    icon: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    instance.get("/orders").then((res) => setAllOrders(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await instance.post("/services", {
      icon: service.icon,
      title: service.title,
      description: service.description,
    });

    history.push("/");
  };

  return (
    <div className="admin">
      <div className="admin__left">
        <img src={require("../../images/logos/logo.png")} alt="" />
        <p onClick={() => setToggleValue(0)}>
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
          Service List
        </p>
        <p onClick={() => setToggleValue(1)}>
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
          Add Service
        </p>
        <p onClick={() => setToggleValue(2)}>
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
          Make Admin
        </p>
      </div>

      <div className="admin__right">
        <div className="admin__rightHeader">
          <h1>
            {toggleValue === 0
              ? "Service List"
              : toggleValue === 1
              ? "Add Service"
              : "Make Admin"}
          </h1>
          <p>{user?.email}</p>
        </div>

        {toggleValue === 0 ? (
          <table>
            <tr>
              <th>Name</th>
              <th>Email Id</th>
              <th>Service</th>
              <th>Project Details</th>
              <th>Status</th>
            </tr>
            {allOrders.map((order) => (
              <tr>
                <td>{order.clientName}</td>
                <td>{order.clientEmail}</td>
                <td>{order.type}</td>
                <td>{order.details}</td>
                <td>
                  <select name="" id="">
                    <option value="">Pending</option>
                    <option value="">Done</option>
                    <option value="">Ongoing</option>
                  </select>
                </td>
              </tr>
            ))}
          </table>
        ) : toggleValue === 1 ? (
          <form action="" className="addService__form">
            <br />
            <h4>Service Title</h4>
            <br />
            <input
              onBlur={(e) => setService({ ...service, title: e.target.value })}
              type="text"
              placeholder="Enter title"
            />
            <br />
            <br />
            <h4>Service Description</h4>
            <br />
            <input
              onBlur={(e) =>
                setService({ ...service, description: e.target.value })
              }
              type="text"
              placeholder="Write a detailed description"
            />
            <br />
            <br />
            <h4>Icon</h4>

            <button className="btn btn-lg btn-outline-success">
              Upload Image
            </button>
            <br />
            <br />
            <button onClick={handleSubmit} className="btn btn-lg btn-success">
              Submit
            </button>
            <br />
          </form>
        ) : (
          <form action="" className="makeAdmin__form">
            <br />

            <h4>Email</h4>
            <br />
            <div className="makeAdmin__formInput">
              <input type="email" placeholder="JohnDoe@gmail.com" />
              <button className="btn btn-lg btn-success">Submit</button>
            </div>

            <br />
          </form>
        )}
      </div>
    </div>
  );
}

export default Admin;
