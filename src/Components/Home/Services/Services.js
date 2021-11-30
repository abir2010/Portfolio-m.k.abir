import React from "react";

const Services = () => {
  return (
    <div className="" id="services">
      <section className="text-gray-200 lg:pt-8 lg:mx-40">
        <h1
          className="container lg:mx-auto text-2xl font-thin leading-none mb-2  text-gray-400 lg:text-left lg:ml-6"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          Services
          <p className="text-4xl lg:text-6xl mt-2 text-gray-200">
            What I Offer
          </p>
        </h1>
        <div className="container flex flex-col justify-center items-center lg:mx-auto sm:py-12 lg:flex-row lg:justify-center lg:gap-x-12">
          <div className="lg:flex items-center justify-center lg:p-6 mt-8 lg:mt-0">
            <div className="grid w-full grid-cols-1 lg:gap-x-3 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
              <div
                className="p-4"
                style={{ backgroundColor: "#1b1b22" }}
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <div className="flex justify-center">
                  <span
                    className="iconify text-8xl text-purple-700"
                    data-icon="eos-icons:primitive"
                  ></span>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-xl">
                    Front-End Web Development <br /> ( React )
                  </h4>
                  <p className="text-sm text-gray-400 mt-2">
                    I will develop any kind of projects using react js, a
                    javascripts framework.I will design your front end using
                    react and css frameworks.
                  </p>
                  <div className="flex mt-2 space-x-2"></div>
                </div>
              </div>
              <div
                className="space-y-4 p-4"
                style={{ backgroundColor: "#1b1b22" }}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <div className="flex justify-center">
                  <span
                    class="iconify text-8xl text-purple-700"
                    data-icon="eos-icons:node"
                  ></span>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-xl">
                    Full Stack Web Development <br /> ( React and Node )
                  </h4>
                  <p className="text-sm text-gray-400 mt-2">
                    I will develop your website using React (Front-end) and Node
                    js (Back-end). It will be a full stack project based on your
                    website.
                  </p>
                  <div className="flex mt-2 space-x-2"></div>
                </div>
              </div>
              <div
                className="space-y-4 p-4"
                style={{ backgroundColor: "#1b1b22" }}
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <div className="flex justify-center">
                  <span
                    class="iconify text-8xl text-purple-700"
                    data-icon="bx:bxl-javascript"
                  ></span>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-xl">
                    Project Using HTML , CSS , Javascript
                  </h4>
                  <p className="text-sm text-gray-400 mt-2">
                    I will work on the projects like front end based and uses of
                    HTML , CSS , Javascript. I have done so many projects using
                    these three technologies.
                  </p>
                  <div className="flex mt-2 space-x-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
