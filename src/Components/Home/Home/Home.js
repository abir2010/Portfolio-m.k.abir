import React from "react";
import Header from "../../Header/Header";
import Aboutme from "../Aboutme/Aboutme";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Footer/Footer";
AOS.init();

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner></Banner>
      <Aboutme></Aboutme>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
      <Footer/>
    </div>
  );
};

export default Home;
