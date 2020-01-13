/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import TriangleSVG from '../images/triangle.svg';
import './layout.css';

const Triangle = () => {
  return (
    <div className="triangle-container">
      <div className="triangle-top"></div>
      <div className="triangle-bottom"></div>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="layout-grid">
      <Triangle></Triangle>
      <header className="header">
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </header>
      <main className="main">{children}</main>
      <footer className="footer"></footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
