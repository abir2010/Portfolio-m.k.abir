import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import { useParams } from "react-router";
import particlesConfig from "../Particles/Particles-config";
import { Swiper } from "../../../../node_modules/swiper/react/swiper";
import { SwiperSlide } from "../../../../node_modules/swiper/react/swiper-slide";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "./Project.css";
import Header from "../../Header/Header";

SwiperCore.use([EffectCoverflow, Pagination]);

const Project = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const project = projects.find((data) => data.id == id);
  return (
    <div>
      <img src="" alt="" className="rounded-full w-12" />
      <Header />
      <div
        style={{
          position: "fixed",
          zIndex: -1,
          width: "2500px",
          height: "1000px",
        }}
        className="lg:block hidden"
      >
        <Particles
          params={particlesConfig}
          className="App-particles__container"
        />
      </div>
      <section className="lg:my-16 lg:px-16">
        <>
          <div className="hidden lg:block">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <img alt="" src={project?.image3} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src={project?.image1} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src={project?.image2} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="p-3 lg:hidden block">
            <img src={project?.image1} alt="" className="my-3 rounded-xl" />
            <img src={project?.image2} alt="" className="my-3 rounded-xl" />
            <img src={project?.image3} alt="" className="my-3 rounded-xl" />
          </div>
        </>
        <div className="lg:px-0 px-4">
          <div className="container my-5 lg:ml-2 pt-8 lg:pt-20">
            <h1 className="text-3xl leading-none mb-2 text-gray-400 flex lg:justify-center lg:mr-0 lg:mr-4">
              <div>
                <p className="text-4xl lg:text-6xl mt-2 text-gray-200 my-4 secondary-font">
                  {project?.title}
                </p>
                <p className="text-sm font-bold secondary-font text-gray-400 my-3">
                  {project?.description}
                </p>
                <p className="lg:px-72 text-sm font-bold secondary-font text-gray-300 my-3 text-left">
                  <br />
                  <br />
                  <span className="text-xl">FEATURES : </span>
                  <br />
                  <br />
                  1. {project?.siteInfo1} <br />
                  <br />
                  2. {project?.siteInfo2} <br />
                  <br />
                  3. {project?.siteInfo3} <br />
                  <br />
                  4. {project?.siteInfo4} <br />
                  <br />
                  5. {project?.siteInfo5} <br />
                  <br />
                </p>
                <div className="">
                  <a href={project?.client}>
                    <button className="bg-purple-700 p-1 rounded-full text-sm text-gray-900 mr-8">
                      <span
                        className="iconify text-4xl hover:text-gray-50"
                        data-icon="eva:github-fill"
                      ></span>
                    </button>
                  </a>
                  <a href={project?.server}>
                    <button className="bg-purple-700 p-1 rounded-full text-sm text-gray-900">
                      <span
                        className="iconify text-4xl hover:text-gray-50"
                        data-icon="eva:github-fill"
                      ></span>
                    </button>
                  </a>
                </div>
                <div className="flex justify-center gap-4">
                  <p className="text-sm text-gray-50">client-side</p>
                  <p className="text-sm text-gray-50">server-side</p>
                </div>
              </div>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
