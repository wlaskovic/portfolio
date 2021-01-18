import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelector from '../../selectors/language-selector.selectors';

import './navigation-bar.styles.scss';
import M from 'materialize-css';

export default class NavigationBar extends React.Component {

  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }
  
  render() {
    return (
      <nav className="black">
        <div className="nav-wrapper">
          <img src="/assets/logo_transparent.png" className="logo brand-logo center" alt="logo" onClick={this.props.handleClick}/>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="selected" to="/about">About me</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="selected" to="/contact">Contact</NavLink></li>
          </ul>

          <ul id="slide-out" className="sidenav">
            <li>
              <NavLink className="nav-link sidenav-close" to="/">
                Home <i className="medium material-icons">home</i>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link sidenav-close" activeClassName="selected" to="/about">
                About me <i className="medium material-icons">person</i>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link sidenav-close" activeClassName="selected" to="/contact">
                Contact <i className="medium material-icons">contacts</i>
              </NavLink>
            </li>
          </ul>
          <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    )
  }
}; 