import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../asserts/pictures/s_logo.png";

const NavBar = () => {
  return (
    <nav className="nav-menu">
      <img className="logo" src={logo} alt="logo" />
      <ul className="nav-menu-items">
        {navBarData.map((item, index) => {
          console.log(item, index, " $ navBarData");
          // const changeStyle = (event, index) => {
          //   //   setSelectedChild(index);
          // };
          // return <>nav </>;
          return (
            <li
              key={index}
              className={
                "list-menu-item"
                //   index === true ? item.mobileselectedCName : item.mobileCname
              }
            >
              <Link
                to={item.path}
                //   onClick={(event) => changeStyle(event, index)}
              >
                <div>{item.icon}</div>
                <span>{item.mobileTitle}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const navBarData = [
  {
    title: "Home",
    path: "/",
    mobileTitle: "Home",
    cName: "nav-text",
    selectedCName: "", //"nav-text-selected",
    mobileCname: "", // "nav-mobile-text",
    mobileselectedCName: "", // "nav-mobile-text-selected",
  },
  {
    title: "Resume",
    path: "/resume",
    mobileTitle: "Resume",
    cName: "nav-text",
    selectedCName: "", //"nav-text-selected",
    mobileCname: "", // "nav-mobile-text",
    mobileselectedCName: "", // "nav-mobile-text-selected",
  },
  {
    title: "hobbies",
    path: "/hobbies",
    mobileTitle: "Hobbies",
    cName: "nav-text",
    selectedCName: "", //"nav-text-selected",
    mobileCname: "", // "nav-mobile-text",
    mobileselectedCName: "", // "nav-mobile-text-selected",
  },
  {
    title: "Contact Me",
    path: "/contact Me",
    mobileTitle: "Contact Me",
    cName: "nav-text",
    selectedCName: "", //"nav-text-selected",
    mobileCname: "", // "nav-mobile-text",
    mobileselectedCName: "", // "nav-mobile-text-selected",
  },
];

export default NavBar;
