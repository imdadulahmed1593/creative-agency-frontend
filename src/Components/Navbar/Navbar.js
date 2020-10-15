import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./Navbar.css";
function Navbar() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
      history.push("/login");
    }
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="#">
        <img
          className="navbar__logo"
          src={require("../../images/logos/logo.png")}
          alt=""
        />
      </a>

      <div className="ml-auto" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item active">
            <a class="mr-5 nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class=" mr-5 nav-link" href="#">
              Our Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="mr-5 nav-link" href="#">
              Our Trainers
            </a>
          </li>
          <li class="nav-item">
            <a class="mr-5 nav-link" href="#">
              Contact Us
            </a>
          </li>
          <button onClick={handleAuthentication} className="mr-5 btn btn-dark">
            {user ? "Log Out" : "Login"}
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
