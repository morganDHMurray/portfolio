import React from 'react';

function changeColourRed() {
  document.documentElement.style.setProperty('--primary', 'var(--red)');
}

const RedSwitch = () => {
  return (
    <button onClick={changeColourRed} className="switch switch-red-on"></button>
  );
};

export default RedSwitch;
