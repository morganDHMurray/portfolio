import React from 'react';

function changeColourBlue() {
  document.documentElement.style.setProperty('--primary', 'var(--blue)');
}

const BlueSwitch = () => {
  return (
    <button
      onClick={changeColourBlue}
      className="switch switch-blue-on"
    ></button>
  );
};

export default BlueSwitch;
