import React from 'react'
//Importing react font awesome
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons'
import python from '../python.png'
import cpp from '../cpp.png'
import flask from '../flask.png'
import java from '../java.png'
import javaS from '../javascript.png'
import csharp from '../c_sharp.png'
import dotnet from '../dotnet.png'
import gitt from '../git.png'
import gcpp from '../gcp.png'
import htmll from '../html.png'
import csss from '../css.png'
import nodejs from '../nodejs.svg'
import tsf from '../tensorflow.png'
import sqlserver from '../sql-server.png'
import mysqll from '../mysql.png'


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
                                    <img src={nodejs} alt="nodejs-logo"/>
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
