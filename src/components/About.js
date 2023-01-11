import React from 'react'

const About = () => {
    return (
        <div className="container">
            <div className="page-illustration" id="image2-div">
                    <img src="https://cdn.discordapp.com/attachments/698271256666963968/1019361808995336242/salima-aboutme-illustration-v2.png" className="aboutme-illustration" alt="aboutme" />
            </div>
            {/* <div className="row"> */}
                <div className="col l6 m6 s12">
                    <h4>
                        let's get connected!
                    </h4>
                    <div className="about-text">
                        When I am not touching code, you can find me playing my favorite video games or exploring new coffee shops. These passions can be seen in some of my projects such as Marshal Crossing and Smatch.
                    </div>

                    <div className="about-text">
                        As someone who has been in front of a screen for most of my life, I understand the desire to have websites and apps run smoothly. This leads me to focus on having clean and concise code since this affects a user's overall experience. I strive to continuously improve my knowledge to achieve this standard on my projects.
                    </div>
                    
                    <div className="about-text">
                        Whether you want to chat about your latest gaming adventures or go straight to code talk, <a href="mailto:salima.harun@gmail.com" className="about-link">send me a message</a> and <a href="https://www.linkedin.com/in/salimaharun/" className="about-link" target="_blank" rel="noreferrer noopener">let's get connected</a>!
                    </div>

                    <a href="https://drive.google.com/file/d/1NlZTogS5xu_pOETXTLqrYQK-NnlUPw97/view" className="waves-effect waves-light amber accent-3 btn-small" target="_blank" rel="noreferrer noopener">resume</a>
                </div>
            {/* </div> */}
        </div>
    )
}

export default About