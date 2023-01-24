import { useState } from "react";
import Button from "./Button";
import ToggleTheme from "./ToggleTheme";

function Navbar({ links=[] }) {
    const [activeLink, setActiveLink] = useState(links[0])
    return (
        <nav className="navbar">
            <ul className="nav">
                {links.map((link, index) => (
                    <li key={index} className={`${link == activeLink ? 'active' : ''}`}>
                        <a href="#" onClick={()=> setActiveLink(links[index])}>{link}</a>
                    </li>
                ))}
                <ToggleTheme />
            </ul>
        </nav>
    );
}
export default Navbar;