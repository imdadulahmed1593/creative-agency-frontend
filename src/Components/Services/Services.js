import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../axios";
import { useStateValue } from "../StateProvider";
import "./Services.css";

function Services() {
  const [services, setServices] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    instance.get("/services").then((res) => setServices(res.data));
  }, []);

  console.log(services);
  return (
    <div className="mb-5 pb-5">
      <h1 className="text-center m-5 p-5">
        Provide Awesome <span style={{ color: "#7AB259" }}>Services</span>{" "}
      </h1>

      <div className="services">
        {services.map((service) => (
          <Link
            className="service "
            onClick={(e) =>
              dispatch({
                type: "SET_ORDER",
                order: {
                  type: service.title,
                  description: service.description,
                  icon: service.icon,
                },
              })
            }
            to="/order"
          >
            <img
              className="service__icon img-fluid"
              src={
                service.icon
                  ? require(`../../images/icons/${service.icon}`)
                  : `${service.url}`
              }
              alt=""
            />
            <h2 className="text-center m-3">{service.title}</h2>
            <p className="text-center">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
// https://toppng.com/uploads/preview/web-development-icon-png-clipart-website-development-web-dev-icon-11562967383vhxlfmnerz.png
