import React from 'react';
import { Link } from 'react-router-dom';

//CSS import
import "../css/components/Home.css";

const Home = () => {

    return (
            <div className="container">
                <div className="page-illustration" id="image-div">
                    <img src="https://cdn.discordapp.com/attachments/1171926658035486780/1306287286740324483/landing.png?ex=67361e56&is=6734ccd6&hm=0104ac3fef38c648bf794c40a867b988f8c9ee32321b87fe30f05a4e8cb74e3f&" className="landing-illustration" alt="homepage" />
                </div>
                <div className="home-text" id="landing-text">
                    <h4>
                        hello there!
                    </h4>
                    <p>
                        I am a software developer with an innate desire to learn and discover new ways to solve problems. Throughout my three years of experience as an application developer at Accenture, I dedicate my time to continuously learn new trends in technologies to solve real-world problems for my clients. My project work have provided me the opportunity to develop best practices on Agile methodology. I am eager to apply my experiences and bring my enthusiasm for high quality code in a dynamic industry environment.
                    </p>
                    <p>
                    <Link to="/about" className="nav-text black-text">
                        <a className="waves-effect waves-light blue accent-1 btn-small">learn more</a>
                    </Link> <Link to="/projects" className="nav-text black-text"><a className="waves-effect waves-light blue accent-1 btn-small">view projects</a></Link>
                    </p>
                </div>
            </div>
    )
}

export default Home
