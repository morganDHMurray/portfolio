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
// ..

const Layout = ({ children }) => {
  return (
    <div className="layout-grid">
      {/*<div>
        <svg height="1000" width="22" className="svg-line">
          <line x1="20" y1="30" x2="20" y2="950" />
        </svg>
      </div>*/}
      <nav className="nav">
        <ul>
          <Scrollspy
            items={['about', 'skills', 'projects', 'contact']}
            currentClassName="is-current"
            offset="50"
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
