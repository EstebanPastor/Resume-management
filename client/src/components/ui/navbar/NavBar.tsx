import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/theme.context";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { links } from "../../../constants/links";
import { Menu, LightMode, DarkMode } from "@mui/icons-material";
import { ToggleButton } from "@mui/material";

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const ToggleOpenMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const menuStyles = open ? "menu open" : "menu";

  return (
    <div className="navbar">
      <div className="brand">
        <span>Resume Management</span>
      </div>
      <div className={menuStyles}>
        <ul>
          {links.map((item) => (
            <li key={item.href} onClick={ToggleOpenMenu}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hamburger">
        <Menu onClick={ToggleOpenMenu} />
      </div>
      <div className="toggle">
        <ToggleButton
          value={"check"}
          selected={darkMode}
          onChange={toggleDarkMode}
        >
          {darkMode ? <LightMode /> : <DarkMode />}
        </ToggleButton>
      </div>
    </div>
  );
};

export default NavBar;
