import React from 'react'
import study from '../study.svg'

function About() {
    return (
        <section className="about-me">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12"> <img src={study} alt="About-me" className="img-fluid"/> </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        <h2 className="pt-5">
                            <span>Let me </span>
                            <span>introduce </span>
                            <span>myself</span>
                        </h2>
                        <div className="paragraph py-4 w75">
                            <p className="about-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit repudiandae magnam tenetur sunt omnis maxime animi! Sint, optio magni?
                            </p>
                            <p className="about-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit repudiandae magnam tenetur sunt omnis maxime animi! Sint, optio magni?
                            </p>
                            <div className="about-contact">
                            <b>Like Me?</b><a href="#" className="btn-resume-download-link">Contact Here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
    )
}

export default About
