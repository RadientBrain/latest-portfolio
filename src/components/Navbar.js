import React from 'react';
import mylogo from '../radientbrain_logo.png';
//Importing react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <nav className="navbar drop-shadow navbar-expand-lg navbar-dark" style={{backgroundColor:'#3366cc', position: "sticky"}} fixed="top">

        <div className="container">

        
        <a className="navbar-brand" href="#home_"> <img className="logo" src={mylogo} alt="radientbrain-logo"/> </a>
        <button style={{color:'#ffffff'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#home_">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#about_">About</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#skills_">Skills</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#projects_">Projects</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#achievements_">Achievements</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#extras_">Extras</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#contact_">Contact</a>
            </li>

            
            </ul>

        </div>
        </div>
        </nav>
    )
}

export default Navbar
