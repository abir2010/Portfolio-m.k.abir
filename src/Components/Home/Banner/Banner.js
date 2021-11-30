import React from "react";
import Typewriter from "typewriter-effect";
import { saveAs } from "file-saver";
import "./Banner.scss";
import bannerImg from "../../../images/banner-img/my-bg2.png";
import ParticlesBackground from "../Particles/ParticlesBackground";
import Particles from "react-particles-js";

const Banner = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1nAsrWoF4ShwAaQsYLrDEPgzTd-7lsidp",
      "M_K_Abir_Resume.pdf"
    );
  };
  return (
    <div id="home" className="">
      <div
        style={{ position: "absolute", zIndex: -1 }}
        className="lg:block hidden"
      >
        <ParticlesBackground />
      </div>
      <section className="text-gray-200 lg:h-screen flex items-center justify-center">
        <div className="container lg:flex flex-col justify-center lg:mx-auto sm:py-12 lg:py-24 py-12 lg:flex-row lg:justify-center lg:gap-32">
          <div
            className="lg:flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="text-xl lg:text-3xl font-thin leading-none mb-2 text-gray-400">
              Hello people I'm
              <p className="lg:text-9xl mt-2 text-gray-200 text-5xl">
                M.K.Abir
              </p>
            </h1>
            <p className=" mb-8 text-2xl lg:text-4xl text-purple-600 sm:mb-12">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Junior Web Developer")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Front End Developer")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("React Developer")
                    .pauseFor(1500)
                    .start();
                }}
              />
            </p>
            <div className="sm:flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-gray-800">
              <button onClick={saveFile} class="portfolio-experiment">
                <a>
                  <span class="text">Download CV</span>
                  <span class="line -right"></span>
                  <span class="line -top"></span>
                  <span class="line -left"></span>
                  <span class="line -bottom"></span>
                </a>
              </button>
            </div>
          </div>
          <div
            className="lg:flex items-center justify-center lg:p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <img
              src={bannerImg}
              alt=""
              className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
