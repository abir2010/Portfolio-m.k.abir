import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import main_logo from "../../images/logo/main-logo-1.png";
import "./Header.css";

const Header = () => {
  const [navClick, setNavClick] = useState(false);
  return (
    <div className="nav-bar lg:fixed secondary-font">
      <div className="nav">
        <header class="text-gray-300 body-font">
          <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
            <HashLink
              to="/home/#home"
              class="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0"
            >
              <img
                src={main_logo}
                alt=""
                class="w-14 rounded-full mr-5 icon lg:block hidden"
              />
            </HashLink>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center lg:block hidden">
              <Link to="/blogs" className="mr-5 px-2 py-1 single_nav">
                Blogs
              </Link>
              <HashLink
                to="/home/#projects"
                className="mr-5 px-2 py-1 single_nav"
              >
                Projects
              </HashLink>
              <HashLink to="/home/#about" className="mr-5 px-2 py-1 single_nav">
                About Me
              </HashLink>
              <HashLink
                to="/home/#services"
                className="mr-5 px-2 py-1 single_nav"
              >
                Services
              </HashLink>
              <HashLink
                to="/home/#contact"
                className="mr-5 px-2 py-1 single_nav"
              >
                Contact
              </HashLink>
            </nav>
          </div>
          <div className="block lg:hidden flex flex-wrap md:flex-row items-center justify-between px-8">
            <nav>
              {navClick === false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="fixed"
                  style={{ zIndex: 100 }}
                  onClick={() => setNavClick(true)}
                >
                  <path
                    d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z"
                    fill="#8f17f2"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="2.5em"
                  height="2.5em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="fixed"
                  style={{ zIndex: 100 }}
                  onClick={() => setNavClick(false)}
                >
                  <path
                    fill="#8f17f2"
                    d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"
                  />
                </svg>
              )}
            </nav>
            <img src={main_logo} alt="" className="w-14 rounded-full icon" />
          </div>
          {navClick ? (
            <div className="pl-10">
              <nav
                class="md:ml-auto items-center text-base justify-center fixed bg-gray-600 px-20 py-2"
                style={{ zIndex: 100 }}
              >
                <HashLink
                  to="/home/#home"
                  className="block my-3"
                  onClick={() => setNavClick(false)}
                >
                  Home
                </HashLink>
                <Link to="/blogs" className="block my-3">
                  Blogs
                </Link>
                <HashLink
                  to="/home/#projects"
                  className="block my-3"
                  onClick={() => setNavClick(false)}
                >
                  Projects
                </HashLink>
                <HashLink
                  to="/home/#about"
                  className="block my-3"
                  onClick={() => setNavClick(false)}
                >
                  About Me
                </HashLink>
                <HashLink
                  to="/home/#services"
                  className="block my-3"
                  onClick={() => setNavClick(false)}
                >
                  Services
                </HashLink>
                <HashLink
                  to="/home/#contact"
                  className="block my-3"
                  onClick={() => setNavClick(false)}
                >
                  Contact
                </HashLink>
              </nav>
            </div>
          ) : (
            <div></div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
