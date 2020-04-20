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
import Scrollspy from 'react-scrollspy';
import RedSwitch from './red-switch';
import BlueSwitch from './blue-switch';
// ..

const Layout = ({ children }) => {
  return (
    <div className="layout-grid">
      <div className="switch-container">
        <RedSwitch></RedSwitch>
        <BlueSwitch></BlueSwitch>
      </div>
      <nav className="nav">
        <ul>
          <Scrollspy
            items={['about', 'skills', 'projects', 'contact']}
            className="nav-flex"
            currentClassName="is-current"
            offset="0"
          >
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
          </Scrollspy>
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
