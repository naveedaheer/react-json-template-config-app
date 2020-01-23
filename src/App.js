import React from 'react';
import './App.css';
import LeftPanel from './components/leftPanel/leftPanel';
import UploadTemplate from './components/uploadTemplate/uploadTemplate';

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <UploadTemplate />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
