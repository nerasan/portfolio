import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <>
            <nav className="z-depth-0">
                <div className="nav-wrapper indigo lighten-5 z-depth-0">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to="/" className="nav-main-text black-text">salima harun</Link></li>
                    </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about" className="nav-text black-text">about</Link></li>
                    <li><Link to="/projects" className="nav-text black-text">projects</Link></li>
                    <li><a href="https://drive.google.com/file/d/1Lxcga0Z1TeB7ki1LYpp9V023PjHu1ymT/view" className="nav-text black-text" target="_blank" rel="noreferrer noopener">resume</a></li>
                </ul>
                </div>
            </nav>
            <div>
                {props.children}
            </div>

            <footer className="page-footer indigo lighten-5">
                <div className="footer-copyright indigo lighten-5 black-text">
                    <div className="container">
                        <a href="https://github.com/nerasan">
                            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" className="footer-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/salimaharun/">
                            <img src="https://www.shareicon.net/data/2016/07/08/116977_address-book_512x512.png" alt="linkedin icon" className="footer-icon" />
                        </a>
                        <div>
                            © 2021 salima harun
                        </div>
                     </div>
                </div>
            </footer>
        </>
    )
}

export default Layout