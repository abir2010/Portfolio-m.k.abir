import React from "react";
import "./projects.css";
import bikez from "../../../images/bikez/main-2.png";
import shiftus from "../../../images/shiftus/main-1.png";
import medCity from "../../../images/med-city/main-3.png";
import { useHistory } from "react-router";
// import ParticlesBackground from "../Particles/ParticlesBackground";

const Projects = () => {
  const history = useHistory();
  return (
    <div className="lg:px-40 px-8" id="projects">
      <div className="lg:mx-auto my-5 lg:text-left lg:ml-2 pt-20">
        <h1
          className="text-3xl leading-none mb-2 text-gray-400 font-thin"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          Here are some
          <p className="text-4xl lg:text-6xl mt-2 text-gray-200 secondary-font">
            My Recent Works
          </p>
        </h1>
      </div>
      {/* first project section */}
      <section className="text-gray-200 flex justify-center items-center">
        <div
          className="container lg:flex flex-col justify-center lg:mx-auto sm:py-12 lg:py-12 lg:px-2 lg:flex-row lg:justify-center gap-32 rounded-md bg-gray-900 my-2"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-gray-500">
              <div>
                <p className="text-sm mt-2">FEATURED</p>
                <p className="text-4xl text-gray-50 my-4">Bikez Online Shop</p>
                <p className="text-sm p-2 text-gray-400 secondary-font font-bold">
                  Bikez is a simple e-commerce website for buying and selling
                  by-cycles. This website is based on two different audience one
                  is user who can register and login using google account. And
                  the other role is for admins they can visit this website and
                  manage the orders placed by any user and also deliver or
                  cancel the order. Admin also have the right to make another
                  user an admin. Therefor this website making project was an
                  integration of both Front ena and Back end side.
                </p>
                <button
                  onClick={() => history.push("/projects/1")}
                  className="bg-purple-700 px-2 py-1 text-gray-50 my-4 hover:bg-transparent hover:text-purple-500 secondary-font"
                >
                  More Details
                </button>
                <p className="hidden lg:block">
                  Technology Used : <br />
                  <div className="flex gap-2 items-center justify-start font-thin">
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      React
                    </p>{" "}
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      Node
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      Express
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      Tailwind
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      MongoDB
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      Firebase
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <a
              href="https://bikez-123.web.app/"
              className="flex items-center justify-center mt-8 lg:mt-0 image"
            >
              <img
                src={bikez}
                alt=""
                className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </a>
          </div>
        </div>
      </section>
      {/* second project section */}
      <section className="text-gray-200 flex justify-center items-center">
        <div
          className="container lg:flex flex-col justify-center lg:mx-auto sm:py-12 lg:py-12 lg:px-2 lg:flex-row lg:justify-center gap-32 border border-gray-50 rounded-md my-1"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-gray-500">
              <div>
                <p className="text-sm mt-2">FEATURED</p>
                <p className="text-4xl text-gray-50 my-4">Shiftus Limited</p>
                <p className="text-sm p-2 text-gray-400 secondary-font font-bold">
                  Shiftus Limited is a simple product delivery website for
                  deliver products accross the world. This website is based on
                  two different audience one is user who can register and login
                  using google account. And the other role is for admins they
                  can visit this website and manage the orders placed by any
                  user and also deliver or cancel the order. Admin also have the
                  right to make another user an admin. Therefor this website
                  making project was an integration of both Front ena and Back
                  end side.
                </p>
                <button
                  onClick={() => history.push("/projects/2")}
                  className="bg-purple-700 px-2 py-1 text-gray-50 my-4 hover:bg-transparent hover:text-purple-500 secondary-font"
                >
                  More Details
                </button>
                <p className="hidden lg:block">
                  Technology Used : <br />
                  <div className="flex gap-2 items-center justify-start font-thin">
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      React
                    </p>{" "}
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      Node
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      Express
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      Tailwind
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      MongoDB
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      Firebase
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div>
            <a
              href="https://shift-us-delivery-service.web.app/"
              className="flex items-center justify-center mt-8 image"
            >
              <img
                src={shiftus}
                alt=""
                className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </a>
          </div>
        </div>
      </section>
      {/* third project section */}
      <section className="text-gray-200 flex items-center">
        <div
          className="container lg:flex flex-col justify-center lg:mx-auto sm:py-12 lg:py-8 lg:flex-row lg:justify-center gap-32 rounded-md bg-gray-900 lg:px-2 my-2"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-gray-500">
              <div>
                <p className="text-sm mt-2">FEATURED</p>
                <p className="text-4xl text-gray-50 my-4">
                  Med-City Medical Center
                </p>
                <p className="text-sm p-2 text-gray-400 secondary-font font-bold">
                  Med-city Medical center is a medical service provider website
                  for patients. This website is based on users.This user
                  friendly website have the firebase authentication so that an
                  user can register and login using google. After login an user
                  can take appointment from here. And can see the available
                  doctors. Therefore this website making project was a Front End
                  based work project.
                </p>
                <button
                  onClick={() => history.push("/projects/3")}
                  className="bg-purple-700 px-2 py-1 text-gray-50 my-4 hover:bg-transparent hover:text-purple-500 secondary-font"
                >
                  More Details
                </button>
                <p className="hidden lg:block">
                  Technology Used : <br />
                  <div className="flex gap-2 items-center justify-start font-thin">
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      HTML
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      CSS
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      React
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      Tailwind
                    </p>
                    <p className="bg-gray-800 text-gray-100 px-2 py-1 rounded-sm">
                      Firebase
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <a
              href="https://med-city.web.app/"
              className="flex items-center justify-center mt-8 image"
            >
              <img
                src={medCity}
                alt=""
                className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
