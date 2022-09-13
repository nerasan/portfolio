import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <>
            <nav className="z-depth-0">
                <div className="nav-wrapper indigo lighten-5 z-depth-0">
                    <ul id="nav-mobile" className="left">
                    <li><Link to="/" className="nav-main-text black-text"><h5>salima harun</h5></Link></li>
                    </ul>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/about" className="nav-text black-text">about</Link></li>
                    <li><Link to="/projects" className="nav-text black-text">projects</Link></li>
                    <li><a href="https://drive.google.com/file/d/1XZPOodZXUbaHAL7p3aDyb3knA1eDebdL/view?usp=sharing" className="nav-text black-text" target="_blank" rel="noreferrer noopener">resume</a></li>
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
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" className="footer-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/salimaharun/">
                            <img src="https://www.shareicon.net/data/2016/07/08/116977_address-book_512x512.png" alt="linkedin icon" className="footer-icon" />
                        </a>
                        <div>
                            © 2022 salima harun
                        </div>
                     </div>
                </div>
            </footer>
        </>
    )
}

export default Layout