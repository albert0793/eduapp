import Button from "./Button";
import ToggleTheme from "./ToggleTheme";

function Navbar({ links=[] }) {
    return (
        <nav className="navbar">
            <ul className="nav">
                {links.map((link, index) => (
                    <li key={index} className={`${link == 'Home' ? 'active' : ''}`}>
                        <a href="#">{link}</a>
                    </li>
                ))}
                <ToggleTheme />
            </ul>
        </nav>
    );
}
export default Navbar;