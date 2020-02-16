import React from 'react';
import './NavBar.css'
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='buttons'>
                <ul>
                    <a href="https://github.com/atahanszgn" target="_blank" rel="noopener noreferrer"><li className="git">GitHub</li></a>
                    <Link
                        activeClass="active"
                        to="projectsSection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    ><li className="prjs">Projects</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;