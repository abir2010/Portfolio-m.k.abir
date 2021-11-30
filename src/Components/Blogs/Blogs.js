import React from "react";

const Blogs = () => {
  return (
    <div>
      <section
        className="text-gray-200 lg:mx-40 xl:mx-64"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="container lg:flex flex-col justify-center items-center lg:p-6 mx-auto sm:py-12 lg:py-32 lg:flex-row lg:justify-center">
          <div></div>
          <div className="lg:flex flex-col justify-center text-center rounded-sm lg:text-left">
            <h1 className="text-2xl font-thin leading-none sm:text-2xl text-gray-400">
              Blogs
              <p className="text-3xl lg:text-6xl text-gray-200 mt-3">
                Blog section coming soon...
              </p>
            </h1>
            <p className="mt-6 mb-4 text-sm text-gray-400 font-thin sm:mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ut
              eveniet excepturi quisquam odio, ea omnis et a quas deleniti
              corporis obcaecati saepe consequatur sunt quo at, numquam nemo
              sapiente, tenetur ipsam laborum exercitationem hic provident!
              Fugiat fuga fugit totam, itaque libero, esse dolore sit excepturi
              tempora distinctio non perferendis voluptatum voluptatem soluta
              nemo architecto neque delectus in. Molestiae, minus omnis officiis
              voluptates esse rem necessitatibus ex, qui eos, sequi
              perspiciatis! Minima alias amet autem at! Illum omnis consequuntur
              facilis, quibusdam voluptatibus tempora sed ipsam laboriosam vero
              nihil accusantium suscipit, eius, saepe cumque veniam aut iure
              libero magni dolorem similique.
            </p>
            <div className="flex flex-col space-y-4 items-center justify-center lg:flex-row sm:space-y-0 sm:space-x-4">
              <a href="https://github.com/abir2010">
                <span
                  className="iconify text-2xl hover:text-purple-700"
                  data-icon="eva:github-fill"
                ></span>
              </a>
              <a href="https://linkedin.com/in/m-k-abir">
                <span
                  className="iconify text-2xl hover:text-purple-700"
                  data-icon="eva:linkedin-fill"
                ></span>
              </a>
              <a href="https://www.facebook.com/Kaiser.Abir">
                <span
                  className="iconify text-2xl hover:text-purple-700"
                  data-icon="eva:facebook-fill"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
