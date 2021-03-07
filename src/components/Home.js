import React from 'react'
// import axios from 'axios'

// components
// import Spinner from './common/Spinner'

//CSS import
import "../css/components/Home.css"

const Home = () => {

    return (
        <div>
        <div class="container">
            <div class="row">
                <div class="col l6 m6 s12" id="landing-text">
                    <h3>
                        <p>
                            software developer
                        </p>
                        <p>
                            video gamer
                        </p>
                        <p>
                            coffee enthusiast
                        </p>
                    </h3>

                        {/* <p>
                            welcome to my page!
                        </p> */}
                </div>
                <div class="col l6 m6 s12" id="image-div">
                    <img src="https://cdn.discordapp.com/attachments/698271256666963968/809213508063199272/salima-landing-illustration-v2.png" class="landing-illustration"/>
                    {/* <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG9aF9LKUdolg/profile-displayphoto-shrink_800_800/0/1603992612316?e=1617235200&v=beta&t=ntKu5tArGCuJPAhyPL63o1T0gkdYusZQIyfAZd25lgU" class="portfolio-photo"/> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home
