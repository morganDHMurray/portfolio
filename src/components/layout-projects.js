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
import RedSwitch from './red-switch';
import BlueSwitch from './blue-switch';
import BottomNav from './project-page/bottom-nav';
import BlackSwitch from './black-switch';
// ..

const LayoutProjects = ({ children }) => {
  return (
    <body>
      <div className="project-layout-grid">
        <div className="switch-container">
          <RedSwitch></RedSwitch>
          <BlueSwitch></BlueSwitch>
          <BlackSwitch></BlackSwitch>
        </div>
        <main className="projects-main">{children}</main>
        <footer className="projects-footer">
          <BottomNav></BottomNav>
        </footer>
      </div>
    </body>
  );
};

LayoutProjects.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutProjects;
