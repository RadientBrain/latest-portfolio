import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <div className="footer-basic">
            <div className="go-top text-center">
                <a href="#home_">
                    <div className="col-12 text-center">
                        <div className="row-12">
                        <FontAwesomeIcon icon={faArrowUp} size='2x' filter='drop-shadow(0 10px 0 var(--primary))'/>
                        </div>
                        <div className="row-12 top-text">
                            <b>Go Top</b>
                        </div>
                    </div>
                    
                </a>
            </div>
        <footer>
            <div className="social">
                <a href="https://www.linkedin.com/in/chetan-maheshwari-125aa4184/"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="https://github.com/RadientBrain"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="https://wa.me/919057211152"><FontAwesomeIcon icon={faWhatsapp}/></a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#home_">Home</a></li>
                <li className="list-inline-item"><a href="#about_">About</a></li>
                <li className="list-inline-item"><a href="#skills_">Skills</a></li>
                <li className="list-inline-item"><a href="#projects_">Projects</a></li>
                <li className="list-inline-item"><a href="#achievements_">Achievements</a></li>
                <li className="list-inline-item"><a href="#extras_">Extras</a></li>
                <li className="list-inline-item"><a href="#contact_">Contact</a></li>
            </ul>
            <p className="copyright">Copyright &copy; 2021 | All Rights Reserved</p>
        </footer>
    </div>
    )
}

export default Footer
