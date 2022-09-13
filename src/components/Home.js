import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

// components
// import Spinner from './common/Spinner'

//CSS import
import "../css/components/Home.css"

const Home = () => {

    return (
        // <div>
            <div className="container">
                <div className="page-illustration" id="image-div">
                    <img src="https://cdn.discordapp.com/attachments/698271256666963968/809213508063199272/salima-landing-illustration-v2.png" className="landing-illustration" alt="homepage" />
                    {/* <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG9aF9LKUdolg/profile-displayphoto-shrink_800_800/0/1603992612316?e=1617235200&v=beta&t=ntKu5tArGCuJPAhyPL63o1T0gkdYusZQIyfAZd25lgU" class="portfolio-photo"/> */}
                </div>
                {/* <div className="row"> */}
                <div className="home-text" id="landing-text">
                    <h4>
                        hello
                    </h4>
                    <p>
                        I am a software engineer with an innate desire to learn and discover new ways to solve problems. Through my experience as a consultant, I honed my skills to focus on key details and delivery high quality products. My client-facing role has allowed me to understand the bigger picture and ask the right questions to achieve efficient solutions.
                    </p>
                    <p>
                    <Link to="/about" className="nav-text black-text">
                        <a className="waves-effect waves-light blue accent-2 btn-small">learn more</a>
                    </Link> <Link to="/projects" className="nav-text black-text"><a className="waves-effect waves-light blue accent-2 btn-small">view projects</a></Link>
                    </p>
                </div>
            {/* </div> */}
            </div>
        // </div>
    )
}

export default Home
