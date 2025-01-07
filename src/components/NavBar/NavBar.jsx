import './NavBar.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu Toggled')
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Nav">
      <div className="portfolio">
        <h1>Porfolio<span style={{ color: "#25a9df" }}>.</span></h1>
      </div>

      <nav className="navB">
        <li className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon/> : <MenuIcon/>}
        </li>

        {/* Navigation Links */}
        <li className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <li>Home</li>
            </Link>

            <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
              <li>About</li>
            </Link>
            <Link to="/project" style={{ textDecoration: "none", color: "black" }}>
              <li>Project</li>
            </Link>
            <Link to="/connect" style={{ textDecoration: "none", color: "black" }}>
              <li>Connect</li>
            </Link>
          </ul>

          
        </li>
       

        <div className="lightmode">
          <LightModeIcon />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
