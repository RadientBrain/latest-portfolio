import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import footerimg from '../icy-mountain_bg.jpg'

function Footer() {
    return (
        <div class="footer-basic">
            <div className="go-top text-center">
                <a href="#">
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
            <div class="social">
                <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="#"><FontAwesomeIcon icon={faWhatsapp}/></a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Skills</a></li>
                <li class="list-inline-item"><a href="#">Projects</a></li>
                <li class="list-inline-item"><a href="#">Achievements</a></li>
                <li class="list-inline-item"><a href="#">Extras</a></li>
                <li class="list-inline-item"><a href="#">Contact</a></li>
            </ul>
            <p class="copyright">Copyright &copy; 2021 | All Rights Reserved</p>
        </footer>
    </div>
    )
}

export default Footer
