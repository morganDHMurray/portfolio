import React from 'react';

import BearSVG from '../images/bear.svg';

const Bear = () => {
  return (
    <div className="bear-container">
      <img src={BearSVG} alt="red bear of dreams" className="bearimg" />
    </div>
  );
};

export default Bear;
