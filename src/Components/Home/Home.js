import React from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Header></Header>
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
}

export default Home;
// <Portfolio></Portfolio>
//         <Testimonial></Testimonial>
