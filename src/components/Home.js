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
                <div class="col l6 m6 s12">
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
                </div>
                <div class="col l6 m6 s12">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG9aF9LKUdolg/profile-displayphoto-shrink_800_800/0/1603992612316?e=1617235200&v=beta&t=ntKu5tArGCuJPAhyPL63o1T0gkdYusZQIyfAZd25lgU" class="portfolio-photo"/>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Home
