import React from 'react'

const About = () => {
    return (
        <div>
        <div class="container">
            <div class="row">
                <div class="col l6 m6 s12">
                    <h3>
                        hi there!
                    </h3>
                    <div class="about-text">
                        I am a software developer with an innate desire to learn and discover new ways to solve problems. Through my experience as a consultant, I honed my skills to focus on key details and deliver high quality products. My client-facing role has allowed me to understand the bigger picture and ask the right questions to achieve efficient solutions.
                    </div>
                    
                    <div class="about-text">
                        When I am not touching code, you can find me playing my favorite video games or exploring new coffee shops. Whether you want to chat about your latest gaming adventures or go straight to code talk, <a href="mailto:salima.harun@gmail.com" class="about-link">send me a message</a> and <a href="https://www.linkedin.com/in/salimaharun/" class="about-link">let's get connected</a>!
                    </div>

                </div>
                <div class="col l6 m6 s12">
                    <img src="https://i.imgur.com/ahHXw6H.png" class="aboutme-illustration"/>
                </div>
            </div>

        </div>
        </div>
    )
}

export default About