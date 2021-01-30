import React, { useEffect, useState } from 'react'
import axios from 'axios'

// components
import Spinner from './common/Spinner'

const ProjectsGitHub = () => {
    // setting up state that will be used for repos
    const [data, setData] = useState([])

    // used for handling loader
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
        .get('https://api.github.com/users/nerasan/repos').then((res) => {
            console.log(res.data)
            setData(res.data)
        }).then(() => setLoading(false))
    }, [])

    const display = () => {

        // if Loading state is true, then return Spinner, else return the card
        if(loading){
            return <Spinner />
        } else {
            return data.map((card) => (
                    <div key={card.id} className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{card.name}</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                        </div>
                    </div>
                    </div>
        ))
    }
}

    return (
        <div className="container">

            <h2>projects</h2>

            <div className="row">
                {display()}
            </div>
        </div>
    )
}

export default ProjectsGitHub
