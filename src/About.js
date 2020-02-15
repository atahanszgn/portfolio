import React from 'react';
import './About.css';

const About = () => {
    
    return (
        <div className="about">

            <div className="intro">
            <div className="myName">
                    <h1>Hi! I'm Atahan Sezgin.</h1>
                </div>
                <div className="pp">
                    <img src={require('./me.png')} alt="atahan"></img>
                </div>
                
            </div>

            <div className="aboutText">
                <p>3rd year Computer Engineering student who is interested in Game Development and Design, Web Development and Mobile App Development areas. <br/><br/>Has a good knowledge of Object-Oriented Programming, experienced in solving bugs, handling difficult situations and working with teams.</p>
            </div>
        </div>

    );
}

export default About;