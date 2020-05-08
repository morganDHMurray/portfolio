import React from 'react';

let lineStyle = {
  stroke: 'var(--primary)',
  strokeWidth: '2',
  // 'ms' is the only lowercase vendor prefix
};

const BottomNav = () => {
  return (
    <>
      <svg height="2" width="100%">
        <line x1="0" y1="0" x2="2000" y2="0" style={lineStyle} />
      </svg>
      <div className="bottom-nav">
        <p>Previous</p>
        <p>Next</p>
      </div>
    </>
  );
};

export default BottomNav;
