import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.styles.scss';

export const Footer = () => {
    return (
        <footer className="page-footer black">
            <div className="container black">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Helpful Links</h5>
                        <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                    </div>
                    <div className="col l6 s12">
                        <h5 className="white-text">Social media</h5>
                        <a href="https://facebook.com/wlaskovic" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon" src="/assets/social/fb.svg" alt="Facebook" />
                        </a>
                        <a href="https://github.com/wlaskovic" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon" src="/assets/social/github.svg" alt="Github" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container black">
                © {new Date().getFullYear()} Copyright Valentin Vranić
                </div>
            </div>
      </footer>
    );
};