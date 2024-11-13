import React from 'react';

const Projects = () => {
   
    return (

        <div>
            <div className="container center-align">

                <h3>passion projects</h3>

                <div className="row">
                    <div className="col s12 m4 l2"></div>
                    <div className="col s12 m4 l8">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src="https://raw.githubusercontent.com/nerasan/brew-good-frontend/main/public/brew-good-landing.png" alt="brew good" />
                            </div>
                            <div className="card-content">
                                <h4>brew good</h4>
                                <div className="card-paragraph">
                                    A website that allows users to search for cafes based on their location while also learning more about Brew Good's featured philanthropic coffee shop. The site uses JavaScript, React, Chakra UI, and Yelp's API for the coffee shop search function.
                                    
                                    <div>(In progress: Linking backend so users can create an account, login, and add cafes to a favorites list.)</div>
                                </div>
                                {/* <div class="card-paragraph">
                                    <span class="label-bold">Languages used:</span> HTML, CSS, JavaScript
                                </div> */}
                            </div>
                            <div className="card-action">
                                <a href="https://brewgood.netlify.app/" target="_blank" rel="noreferrer noopener">demo</a>
                                <a href="https://github.com/nerasan/brew-good-frontend" target="_blank" rel="noreferrer noopener">code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l2"></div>
                </div>
                
                <div className="row">
                    <div className="col s12 m4 l2"></div>
                    <div className="col s12 m4 l8">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src="https://github.com/nerasan/marshal-crossing/raw/master/pics/welcome.jpg" alt="marshal crossing" />
                            </div>
                            <div className="card-content">
                                <h4>marshal crossing</h4>
                                <div className="card-paragraph">
                                    A text-based browser game introducing you to the interaction aspect of Animal Crossing. Play as the island representative and help your newest villager, Marshal, get accustomed to island life! The game uses vanilla JavaScript, HTML, CSS, and DOM manipulation.
                                </div>
                                {/* <div class="card-paragraph">
                                    <span class="label-bold">Languages used:</span> HTML, CSS, JavaScript
                                </div> */}
                            </div>
                            <div className="card-action">
                                <a href="https://nerasan.github.io/marshal-crossing/" target="_blank" rel="noreferrer noopener">demo</a>
                                <a href="https://github.com/nerasan/marshal-crossing" target="_blank" rel="noreferrer noopener">code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l2"></div>
                </div>


                <div className="row">
                    <div className="col s12 m4 l2"></div>
                    <div className="col s12 m4 l8">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src="https://i.gadgets360cdn.com/large/super_smash_bros_ultimate_nintendo_switch_cover_1534157121839.jpg" alt="smatch" />
                            </div>
                            <div className="card-content">
                                <h4>smatch</h4>
                                <div className="card-paragraph">
                                    For all Super Smash Bros Ultimate players, Smatch is a full CRUD website for players to track match results, view match history, and analyze their performance based on statistics displayed using Chart.js. Smatch uses an unofficial Super Smash Bross API and utilizes Express, Node.js, and Sequelize.
                                </div>
                                {/* <div class="card-paragraph">
                                    <span class="label-bold">Languages used:</span> HTML, CSS, JavaScript, Express, Node.js, Sequelize, Chart.js
                                </div> */}
                            </div>
                            <div className="card-action">
                                <a href="https://smatch-gg.herokuapp.com/" target="_blank" rel="noreferrer noopener">demo</a>
                                <a href="https://github.com/nerasan/smatch" target="_blank" rel="noreferrer noopener">code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l2"></div>
                </div>

                <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="col s12 m4 l8">
                            <div className="card z-depth-0">
                                <div className="card-image">
                                    <img src="https://i.imgur.com/XhMhZKi.png" alt="haikyuu reddit slideshow" />
                                </div>
                                <div className="card-content">
                                    <h4>haikyuu image search</h4>
                                    <div className="card-paragraph">
                                        A simple website for Haikyuu enthusiasts to search any word to pull related posts from Reddit. The site uses DOM manipulation to update the pictures and posts every five seconds. (NSFW posts are turned off.)
                                    </div>
                                    {/* <div class="card-paragraph">
                                        <span class="label-bold">Languages used:</span> HTML, CSS, JavaScript
                                    </div> */}
                                </div>
                                <div className="card-action">
                                    <a href="https://nerasan.github.io/haikyuu-image-search/" target="_blank" rel="noreferrer noopener">demo</a>
                                    <a href="https://github.com/nerasan/haikyuu-image-search" target="_blank" rel="noreferrer noopener">code</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>

            </div>

        </div>
    )
}

export default Projects
