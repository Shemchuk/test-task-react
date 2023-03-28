import React from 'react';
import './SquareBlock.css';

const SquareBlock = ({ isAnimated, children }) => {
  return (
    <div className={`square-block ${isAnimated ? 'animated' : ''}`}>
      { children }
    </div>
  );
};

export default SquareBlock;