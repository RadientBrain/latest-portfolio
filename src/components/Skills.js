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
        <section className="skills-area">
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
                                    <img src={python} alt="python-logo"/>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={cpp} alt="cpp-logo"/>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={tsf} alt="tensorflow-logo"/>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={gcpp} alt="gcp-logo"/>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={gitt} alt="git-logo"/>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={mysqll} alt="mysql-logo"/>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={java} alt="java-logo"/>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={javaS} alt="javascript-logo"/>
                                </div>
                            </div>
                            

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={csharp} alt="csharp-logo"/>
                                </div>
                            </div>
                            

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={dotnet} alt="dotnet-logo"/>
                                </div>
                            </div>
                            

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={sqlserver} alt="sqlserver-logo"/>
                                </div>
                            </div>
                            

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={htmll} alt="html-logo"/>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={csss} alt="csss-logo"/>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={flask} alt="flask-logo"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-skill">
                                    <img src={react} alt="react-logo"/>
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
