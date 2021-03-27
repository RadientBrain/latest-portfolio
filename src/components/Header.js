import React from 'react';
import Typed from 'react-typed';
import profilePic from '../profile.png'

const Header = () => {
    return (
    <section id='home_' className="header">
            
        <div className="header-wrapper">
            <div className="main-info">
                    <img className="profile-pic" src={profilePic} alt="profile-pic"/>
                <b>
                    <h1>
                        Hi, I am Chetan Maheshwari
                    </h1>

                    <Typed
                    
                    className="typed-text"
                    strings={[	"We become what we think about...", 
                    "Winning isn't everything,but wanting to win is...", 
                    "Either you run the day, or the day runs you", 
                    "Fall seven times and stand up eight",
                    "Everything has beauty, but not everyone can see"]}
                    typeSpeed={60}
                    backSpeed={60}
                    loop
                    />
                </b>

                <a href="https://github.com/RadientBrain/Public_Resume/raw/main/PersonalResume.pdf" className="btn-resume-download-link">  Resume </a>
            </div>
        </div>
    </section>
    )
}

export default Header
