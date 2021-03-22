import React from 'react';
import mylogo from '../radientbrain_logo.png';
//Importing react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#3366cc'}}>

        <div className="container">

        
        <a className="navbar-brand" href="#"> <img className="logo" src={mylogo} alt="radientbrain-logo"/> </a>
        <button style={{color:'#ffffff'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">About me</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">Contact</a>
            </li>

            
            </ul>

        </div>
        </div>
        </nav>
    )
}

export default Navbar
