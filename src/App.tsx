/** @jsxImportSource @emotion/react */
import React, { memo } from 'react';
import logo from './logo.svg';
import './App.css';

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div css={{ padding: '8px', backgroundColor: 'brown' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          sapiente quidem ab autem, quod a facere reiciendis iusto voluptatum
          maiores provident. Eum et voluptas sapiente minus doloremque
          obcaecati? Delectus, repellendus.
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default memo(App);
