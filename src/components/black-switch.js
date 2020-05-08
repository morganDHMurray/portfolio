import React from 'react';

function changeColourBlack() {
  document.documentElement.style.setProperty('--primary', 'var(--black)');
}

const BlackSwitch = () => {
  return (
    <button
      onClick={changeColourBlack}
      className="switch switch-black-on"
    ></button>
  );
};

export default BlackSwitch;
