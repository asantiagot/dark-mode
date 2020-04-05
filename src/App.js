import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const darkMode = JSON.parse(localStorage.getItem('dark'));
    return darkMode || false;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <button onClick={() => setDarkMode(prevMode => !prevMode)}>
            Toggle Mode
          </button>
        </div>
      </nav>
      <main>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <h2>Toggle the switch to see some magic happen!</h2>
      </main>
    </div>

  );
}

export default App;
