import React from "react";

const Aboutme = () => {
  return (
    <div id="about">
      <section className="text-gray-200 mx-5 lg:mx-40">
        <div className="lg:flex flex-col justify-center items-center lg:px-6 mx-auto sm:py-12 lg:py-32 pt-12 lg:flex-row lg:justify-center">
          <div></div>
          <div className="lg:flex flex-col justify-center text-center rounded-sm lg:text-left">
            <div
              className="text-2xl font-thin leading-none sm:text-2xl text-gray-400"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              About Me
              <p className="text-3xl lg:text-6xl text-gray-200 mt-3 secondary-font">
                I'm a Full Stack web developer working from home
              </p>
              <p className="mt-8 mb-4 text-sm font-bold text-gray-400 sm:mb-6 secondary-font">
                Innovative Full Stack Developer providing high-impact web app
                development. Sought opportunities to grow my experience and
                develop my skills, happily accepting challenging projects and
                seeking a progressive organization that provides the opportunity
                for development.
              </p>
              <p className="my-4 text-sm text-gray-400 font-bold sm:mb-6 secondary-font">
                For the last one year I have improved myself a lot on the field
                of programming basically on the web development side. I have
                done many personal project using react and also some full stack
                development project using reactjs, nodejs, expressjs, tailwind
                css, mongoDB, firebase etc. Web development is the best what i
                can do now-a-days.
              </p>
            </div>

            <div className="flex space-y-4 items-center justify-center lg:flex-row sm:space-y-0 sm:space-x-4 mb-10 lg:mb-0">
              <div className="lg:mt-0 mt-4">
                <a href="https://github.com/abir2010">
                  <span
                    className="iconify text-2xl hover:text-purple-700"
                    data-icon="eva:github-fill"
                  ></span>
                </a>
              </div>
              <div className="mx-8">
                <a href="https://linkedin.com/in/m-k-abir">
                  <span
                    className="iconify text-2xl hover:text-purple-700"
                    data-icon="eva:linkedin-fill"
                  ></span>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/Kaiser.Abir">
                  <span
                    className="iconify text-2xl hover:text-purple-700"
                    data-icon="eva:facebook-fill"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
