import { useState } from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

function Navbar({ links=[] }) {
    const [activeLink, setActiveLink] = useState(links[0])
    return (
        <nav className="navbar">
            <ul className="nav">
                {links.map((link, index) => (
                    <li key={index} className={`${link == activeLink ? 'active' : ''}`}>
                        <Link to={`/${link.toLowerCase()}`} onClick={()=> setActiveLink(links[index])}>{link}</Link>
                    </li>
                ))}
                <ToggleTheme />
            </ul>
        </nav>
    );
}
export default Navbar;