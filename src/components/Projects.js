import React from 'react'

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
                                <img src="https://camo.githubusercontent.com/23306d41904dba34feb9a7e717f34c190c9f696f49737c93ec278442b92c94db/68747470733a2f2f692e696d6775722e636f6d2f4865416956706e2e706e67" alt="blue barracudas boutique" />
                            </div>
                            <div className="card-content">
                                <h4>blue barracudas boutique</h4>
                                <div className="card-paragraph">
                                    A simple website for users to post items they would like to sell and view products sold by other users. Cloudinary is implemented to allow users to upload a photo of their product. The site uses JavaScript, Express, React, and MongoDB.
                                </div>
                                {/* <div class="card-paragraph">
                                    <span class="label-bold">Languages used:</span> HTML, CSS, JavaScript, Express, Node, MondoDB, React
                                </div> */}
                            </div>
                            <div className="card-action">
                                <a href="http://blue-barracuda-boutique.surge.sh/" target="_blank" rel="noreferrer noopener">demo</a>
                                <a href="https://github.com/orgs/SFX818/teams/blue-barracudas/repositories" target="_blank" rel="noreferrer noopener">code</a>
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
