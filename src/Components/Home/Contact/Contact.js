import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x5sq66c",
        "template_8au93tw",
        form.current,
        "user_zbFj34YmD35CW21X6YB15"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="lg:px-32 pt-20" id="contact">
      <h1
        className="container lg:mx-auto text-2xl leading-none mb-2  text-gray-400 lg:text-left"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        You can
        <p className="text-4xl lg:text-6xl mt-2 text-gray-200 secondary-font">Contact Anytime</p>
      </h1>
      <section className="text-gray-100 body-font mt-12 lg:mb-24">
        <div className="lg:mx-auto lg:flex items-center justify-center">
          <div className="lg:text-left container">
            <h1 className="text-3xl leading-none mb-2 text-gray-400">
              Feel free to
              <p className="text-6xl my-2 text-gray-200 text-center lg:text-left">
                <div className="flex justify-center lg:block">
                  <span class="iconify" data-icon="noto-v1:waving-hand"></span>
                </div>
                say Hello
              </p>
              to me.
            </h1>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:w-1/2 rounded-lg py-3 px-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 bg-gray-900"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-100 secondary-font">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b-2 border-gray-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-100 secondary-font"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b-2 border-gray-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-100 secondary-font"
              >
                YOUR MESSAGE
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                required
                className="w-full bg-transparent border-b-2 h-32 border-gray-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              value="send"
              className="text-white bg-purple-700 border-0 py-2 px-8 focus:outline-none hover:bg-purple-800 text-lg secondary-font"
            >
              CONTACT
            </button>
            <button
              type="reset"
              value="Reset data"
              className="text-white border-0 py-2 px-8 focus:outline-none text-sm secondary-font"
            >
              Reset Form
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
