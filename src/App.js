import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isExistingUser = 'dark' in localStorage;
    const darkMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPreferedColorScheme();

    // if user has entered site, use the previously set value
    if (isExistingUser) {
      return darkMode;
    } else if (userPrefersDark) { // if new user, set prefered color scheme
      return true;
    } else {    // else default to light mode
      return false; 
    }    
  }

  function getPreferedColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span style={{color: darkMode ? "grey" : "yellow"}}>☀</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              type="checkbox"
              className="checkbox"
              id="checkbox"/>
            <label htmlFor="checkbox"/>
          </span>
          <span style={{color: darkMode? "slateblue" : "grey"}}>☾</span>
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
