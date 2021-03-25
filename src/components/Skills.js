import React from 'react'
//Importing react font awesome
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons'
import python from '../python.svg'
import cpp from '../cpp.svg'
import flask from '../flask.svg'
import java from '../java.svg'
import javaS from '../javascript.svg'
import csharp from '../c_sharp.svg'
import dotnet from '../dotnet.svg'
import gitt from '../git.svg'
import gcpp from '../gcp.svg'
import htmll from '../html.svg'
import csss from '../css.svg'
import react from '../react.svg'
import tsf from '../tensorflow.svg'
import sqlserver from '../sql-server.svg'
import mysqll from '../mysql.svg'


function Skills() {
    return (
        <section id='skills_' className="skills-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12">

                        <div className="exp-skills ">
                            <h1>
                                <b>Some of my skills</b>
                            </h1>
                        </div>

                    </div>
                    <div className=" col-xl-6 col-lg-12 col-md-12">
                        <div className="row outer-sibling">
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <a href="https://www.python.org/"><img src={python} alt="python-logo"/></a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://www.cplusplus.com/"><img src={cpp} alt="cpp-logo"/></a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://www.tensorflow.org/"><img src={tsf} alt="tensorflow-logo"/></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://cloud.google.com/"><img src={gcpp} alt="gcp-logo"/></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://git-scm.com/"><img src={gitt} alt="git-logo"/></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://www.mysql.com/"><img src={mysqll} alt="mysql-logo"/></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://www.java.com/"><img src={java} alt="java-logo"/></a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://www.javascript.com/"><img src={javaS} alt="javascript-logo"/></a>
                                </div>
                            </div>
                            

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://docs.microsoft.com/en-us/dotnet/csharp/"><img src={csharp} alt="csharp-logo"/></a>
                                </div>
                            </div>
                            

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://docs.microsoft.com/en-us/dotnet/"><img src={dotnet} alt="dotnet-logo"/></a>
                                </div>
                            </div>
                            

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://docs.microsoft.com/en-us/sql/sql-server/"><img src={sqlserver} alt="sqlserver-logo"/></a>
                                </div>
                            </div>
                            

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src={htmll} alt="html-logo"/></a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src={csss} alt="csss-logo"/></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://flask.palletsprojects.com/"><img src={flask} alt="flask-logo"/></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                <a href="https://reactjs.org/"><img src={react} alt="react-logo"/></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Skills
