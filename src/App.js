import React from 'react';
import './App.css';

import SquareBlock from './SquareBlock/SquareBlock';
import StartButton from './StartButton/StartButton';

function App() {

  return (
    <div className="App">
      <div className="app-container">
        <div className="blocks-container">
          <SquareBlock isAnimated={ true }>1</SquareBlock>
          <SquareBlock>2</SquareBlock>
        </div>

        <StartButton />
      </div>
    </div>
  );
}

export default App;
