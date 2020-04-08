/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../css/layout.css';
import '../css/typography.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
  delay: 100,
  easing: 'ease-in-out',
});

const Layout = ({ children }) => {
  return (
    <div className="layout-grid">
      <nav className="nav">
        <ul>
          <li>
            <a href="#about">
              <span className="nav-number">01</span>About
            </a>
          </li>
          <li>
            <a href="#skills">
              <span className="nav-number">02</span>Skills
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className="nav-number">03</span>Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="nav-number">04</span>Contact
            </a>
          </li>
        </ul>
      </nav>
      <main className="main">{children}</main>
      <footer className="footer"></footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
