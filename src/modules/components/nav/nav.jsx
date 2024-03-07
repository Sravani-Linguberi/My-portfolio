import React from "react";
import "./nav.css";
import logo from "../../../asserts/pictures/s_logo.png";
import { moon, sun } from "../../../asserts/sharedFile";
const NavBar = (props) => {
  const { theme, setTheme } = props;
  console.log(props, "props");
  const toggleTheme = () => {
    theme === "light" ? setPageTheme("dark") : setPageTheme("light");
  };

  const setPageTheme = (theme) => {
    setTheme(theme);
    document.querySelector("body").setAttribute("data-theme", theme);
  };

  return (
    <div className="nav">
      <img className="logo" src={logo} alt="logo" />
      <ul className="navList">
        <li>Home</li>
        <li>Resume</li>
        <li>Hobbies</li>
        <li>Contact</li>
        <li>
          <img
            onClick={() => toggleTheme()}
            className="toggle"
            src={theme === "light" ? moon : sun}
            alt="toggle"
          />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
