/* import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
*/
// Import all components and reference one by name. You can optimize this using
// your build process (ie. Tree shaking in Webpack)
import { Alert } from '@cmsgov/design-system-core';
// Import individual component. No special optimizations needed.
import Button from '@cmsgov/design-system-core/dist/components/Button/Button';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <Alert heading="Hello world">
        <p className="ds-c-alert__text">You did it! You&rsquo;ve ran the example.</p>
        <Button className="ds-u-margin-top--2">Learn more</Button>
      </Alert>
    </div>
  );
  } 
export default App;