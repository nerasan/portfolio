import React from 'react';
import { Route, Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <>
            <nav class="z-depth-0">
                <div className="nav-wrapper indigo lighten-5 z-depth-0 black-text black">
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><Link to="/" className="nav-main-text black-text">salima harun</Link></li>
                    </ul>
                {/* <a href="/" className="black-text">salima harun</a> */}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about" className="nav-text black-text">about</Link></li>
                    <li><Link to="/projects" className="nav-text black-text">projects</Link></li>
                    <li><Link to="/resume" className="nav-text black-text">resume</Link></li>
                    {/* <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li> */}
                </ul>
                </div>
            </nav>
            <div>
                {props.children}
            </div>

            <footer className="page-footer indigo lighten-5">
                {/* <div className="container">
                 <div className="row">
                 <div className="col l6 s12">
                    <h5 className="white-text">Footer Content</h5>
                    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                    </ul>
                </div>
                </div>
                </div> */}
                <div className="footer-copyright indigo lighten-5 black-text black">
                    <div className="container">
                        <a href="https://github.com/nerasan">
                            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" class="footer-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/salimaharun/">
                            <img src="https://www.shareicon.net/data/2016/07/08/116977_address-book_512x512.png" class="footer-icon" />
                        </a>
                        <div>
                            © 2021 salima harun
                        </div>
                        {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
                     </div>
                </div>
            </footer>



        </>
    )
}

export default Layout