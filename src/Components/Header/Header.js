import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import main_logo from "../../images/logo/main-logo-1.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-bar lg:fixed">
      <div className="nav">
        <header class="text-gray-300 body-font">
          <div
            class="
      container
      mx-auto
      flex flex-wrap
      py-5
      flex-col
      md:flex-row
      items-center
    "
          >
            <HashLink
              to="/home/#home"
              class="
        flex
        title-font
        font-medium
        items-center
        text-gray-300
        mb-4
        md:mb-0
      "
            >
              <img src={main_logo} alt="" class="w-14 rounded-full mr-5" />
            </HashLink>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link to="/blogs" className="mr-5 single_nav">
                Blogs
              </Link>
              <HashLink to="/home/#projects" className="mr-5 single_nav">
                Projects
              </HashLink>
              <HashLink to="/home/#about" className="mr-5 single_nav">
                About Me
              </HashLink>
              <HashLink to="/home/#services" className="mr-5 single_nav">
                Services
              </HashLink>
              <HashLink to="/home/#contact" className="mr-5 single_nav">
                Contact
              </HashLink>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
