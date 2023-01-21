import { useState } from 'react'
function ToggleMenu({activator, status}) {
    const[darkMode, setDarkMode] = useState(false);
    const changeTheme = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className={`hamburger__menu ${status ? 'active' : ''}`} onClick={()=> activator(!status)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default ToggleMenu;