import { useState } from 'react'
function ToggleTheme(props) {
    const[darkMode, setDarkMode] = useState(false);
    const changeTheme = () => {
        setDarkMode(!darkMode);
    };
    return (
      <div
        className={`toggle__theme ${darkMode ? "active" : ""}`}
        onClick={changeTheme}
      >
        <span>
          <i className={`fa ${darkMode ? 'fa-moon-o' : "fa-sun-o"}`}aria-hidden="true"></i>
        </span>
      </div>
    );
}

export default ToggleTheme;