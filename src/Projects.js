import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects" id="projectsSection">
            <div className="pSection">
                <h1>Projects</h1>
            </div>

            <div className="project">
                <div className="desc">
                    <h1>Dodgeball Madness!</h1>
                    <p>Dodgeball Madness!
                    My first android game made with Unity and C# programming language. I used Inkscape for Vector graphics, <br />GIMP for editing the images, GameMaker-Studio’s sprite editor for exporting animation sheets,<br /> LMMS for making the music, Audacity for editing sounds and Google AdMob for ads.
                    <br /><br />
                        <a href='https://play.google.com/store/apps/details?id=com.atahanszgn.dbmadness&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target='_blank'><img className="gpLogo" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
                    </p>
                </div>

                <div className="screenshots">
                    <div className="dbss">
                        <img src='https://lh3.googleusercontent.com/AsrO3rUP-4jFOjxVXBiI81hQoaGRtC_2RR2kNjWUqGLIaDdQVaUJewTpi31v3G6gIA=w2560-h1122-rw' alt="ss1"></img>
                    </div>

                    <div className="dbss">
                        <img src='https://lh3.googleusercontent.com/uzZQMLpSemv1nBHKztb6LwffzUSGeBN7wwDxNyVtUv3F1pJslftmkn0pBVJQMOVAiaw=w2560-h1122-rw' alt="ss2"></img>
                    </div>

                    <div className="dbss">
                        <img src='https://lh3.googleusercontent.com/1GS0539mDNhJSXg5znxMjM075nKmj8kp1j3_jWvoJeC77ujL5PpmaZWgBx8qUqAJ11Cw=w2560-h1122-rw' alt="ss3"></img>
                    </div>
                </div>


            </div>

            <br /><br /><br />

            <div className="project">
                <div className="desc">
                    <h1>Robofriends</h1>
                    <p>It's my first app using React!<br />
                        Fetches information of users from <a href="https://jsonplaceholder.typicode.com/users" target="_blank">here</a>, creates cards with that information and displays them. <br />Filters cards by name with using the given input by user.
                        Also search box is static. So you can scroll down and still filter the cards!<br/><br/>
                        <a href="http://atahanszgn.github.io/robofriends" target="_blank">Click here to test!</a>
                    </p>
                </div>

                <div className="screenshots">

                    <div className="rfss">
                        <img src={require('./roboSS.png')} alt="ss2"></img>
                    </div>

                </div>


            </div>
            <br /><br /><br />

            <div className="project">
                <div className="desc">
                    <h1>School Projects</h1>
                    <p>There are other projects of mine on my GitHub page.<br /><br/><br/>
                    Chat Application<br/><br/>
                    A peer-to-peer chat system written in Python programming language.<br/>
                    <br/><a href="https://github.com/atahanszgn/CMP2204-Chat-Application" target="_blank">Link</a><br/><br/><br/>
                    Frequent Word Finder<br/><br/>
                    Prints the top 10 frequent words from a csv file.Written in C++ programming language.<br/>
                    <br/><a href="https://github.com/atahanszgn/CMP2003-frequentWords" target="_blank">Link</a><br/><br/><br/>
                    Maze Game<br/><br/>
                    A command prompt game written in C++ programming language.<br/>
                    <br/><a href="https://github.com/atahanszgn/CMP1001-Maze-Game" target="_blank">Link</a>
                    </p>
                </div>



            </div>
        <br/><br/>
        <p>Made with React</p>


        </div>

    );
}

export default Projects;