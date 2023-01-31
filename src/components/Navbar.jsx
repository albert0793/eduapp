import { useState } from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

function Navbar({ links=[] }) {
    const [activeLink, setActiveLink] = useState(links[0]);
    return (
        <nav className="navbar">
            <ul className="nav">
                {/* <li><Link to={"/"}>Home</Link></li> */}
                {links.map((link, index) => (
                    <li key={index} className={`${link == activeLink ? 'active' : ''}`}>
                        <Link to={`${link == 'Home' ? '/' : link.toLowerCase()}`} onClick={()=> setActiveLink(links[index])}>{link}</Link>
                    </li>
                ))}
                <ToggleTheme />
            </ul>
        </nav>
    );
}
export default Navbar;