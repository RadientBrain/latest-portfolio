import React from 'react'
import Devices from '../scrum-board.jpg'
import Devices1 from '../skills.jpg'
//Importing react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'

function Projects() {
    return (
        <section id='projects_' className="project-area">
            <div className="container">
                <div className="project-title pb5">
                    <h1 className="title-h1">
                        <b>My Recently done Projects</b>
                    </h1>
                </div>
                <div class='wrapper text-center'>
                    <div className="btn-group row" role="group">
                        <button type="button" id="btn-all" data-filter="*" className="active col-sm">All</button>
                        <button type="button" data-filter=".popular" className=" col-sm">Popular</button> 
                        <button type="button" data-filter=".latest" className=" col-sm">Latest</button>
                        <button type="button" data-filter=".upcoming" className=" col-sm">Upcoming</button>
                    </div>
                </div>
                

                <div className="row grid">
                    <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={Devices} >
                                    <img src={Devices} alt="projects-show1"/>
                                </a>  
                                <div className="col btn-link">
                                    <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button>
                                </div>     
                            </div>
                            <div className="title py-4"> 
                                <h4>Vision-Helper</h4>
                                <span className="text-secondary">Latest,Portfolio</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 element-item popular">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={Devices1} >
                                    <img src={Devices1} alt="projects-show2"/>
                                </a>
                                <div className="col btn-link">
                                    <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button>
                                </div> 
                            </div>
                            <div className="title py-4"> 
                                <h4>Vision-Helper</h4>
                                <span className="text-secondary">Popular,Portfolio</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={Devices} >
                                    <img src={Devices} alt="projects-show3"/>
                                </a>  
                                <div className="col btn-link">
                                    <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button>
                                </div> 
                            </div>
                            <div className="title py-4"> 
                                <h4>Vision-Helper</h4>
                                <span className="text-secondary">Upcoming,Portfolio</span>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}

export default Projects
