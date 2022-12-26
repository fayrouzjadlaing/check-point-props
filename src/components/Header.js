import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { name, show, children } = props;
  const handleName = (e) => {
    e.preventDefault();
    show(name);
  };
  return (
    <>
      <header id="header">
        <div class="container">
          <h1>
            <a href="index.html">{name}</a>
          </h1>

          <h2>
            I'm a passionate <span>Web Developper</span> from Tunisia
          </h2>
          {children}

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link active" href="#header">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>

              <li>
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a class="nav-link" href="#!" onClick={handleName}>
                  UserName
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div class="social-links">
            <a href="#" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="!#" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="!#" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
Header.defaultProps = {
  name: "jadla",
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  show: PropTypes.func.isRequired,
};

export default Header;
