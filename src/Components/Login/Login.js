import React, { useEffect } from "react";
import { auth } from "../firebase";
import "./Login.css";
import firebase from "firebase";
import { useHistory, useLocation } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Login() {
  const history = useHistory();
  const location = useLocation();
  const [{ user }, dispatch] = useStateValue();
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        console.log(authUser.email);
        if (authUser.email === "programming.hero.instructor@gmail.com") {
          history.push("/admin");
        } else {
          history.replace(from);
        }
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(function (error) {
      alert(error.message);
    });
  };
  return (
    <div className="login">
      <img src={require("../../images/logos/logo.png")} alt="" />
      <form>
        <h2>Login With</h2>
        <button type="submit" onClick={handleSignIn} className="btn btn-light">
          Continue with Google
        </button>
        <p className="text-center">
          Don't have an account ? <span>Create an account</span>
        </p>
      </form>
    </div>
  );
}

export default Login;

// .then(function (result) {
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var { displayName, email } = result.user;
//   console.log(displayName, email);
//   dispatch({
//     type: "SET_USER",
//     user: {
//       ...user,
//       name: displayName,
//       email: email,
//     },
//   });
//   history.replace(from);
//   // ...
// })
