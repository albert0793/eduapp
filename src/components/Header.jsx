import Navbar  from './Navbar';
import { useState } from 'react';
import ToggleMenu from './ToggleMenu';
function Header() {
    const links = ['Home', 'Login', 'Register', 'Pqrs', 'Logout', 'help'];
    const [showMenu, setShowMenu] = useState(false);
    return (
      <header className="header">
        <div className={`grid ${showMenu ? 'active' : ''}`}>
          <div className="logo">
            <a href="#">
              <h1>
                {/* <img src="/images/logo.png" /> */}
                Educatión <span className="required">App</span>
              </h1>
            </a>
          </div>
          <Navbar links={links} />
        </div>
        <ToggleMenu activator={setShowMenu} status={showMenu} />
      </header>
    );
}

export default Header;