import React from 'react'
import './nav.css'
import logo from '../../../asserts/s-logo.jpeg';
import moon from '../../../asserts/moon.png';
import sun from '../../../asserts/sun.png'
const NavBar = (props) => {
    const {theme , setTheme} = props;
    const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    <div className='nav'>
        <img className='logo' src={logo} alt='logo'/>
            <ul className='navList'>
                <li>Home</li>
                <li>Skills</li>
                <li>About</li>
                <li>Contact</li>
                <li>
                    <img onClick={() => toggleTheme()} className='toggle' src={ theme === 'light' ? moon : sun} alt='toggle'/>
                </li>
            </ul>
    </div>
    
  )
}

export default NavBar;