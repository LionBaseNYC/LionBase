import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { compose } from 'react-compose'

import "../assets/scss/navbar.scss";

import { bubble as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {

  constructor(props) {
    super(props);
    // state = {
    //   sideMenuIsOpen: false
    // }
  }

  // handleClickOutside = (e) => {
  //   this.setState({sideMenuIsOpen: false})
  // }

  render() {

    return (
      <React.Fragment>
        <div id="burger-wrap">
          <div className="nav-item">
            <Link to="/">LionBase</Link>
          </div>
          <div className="grow"></div>
          <Menu 
            right
            id="burger-sidemenu" 
            customBurgerIcon={<FontAwesomeIcon icon={faBars} />}
            customCrossIcon={<FontAwesomeIcon icon={faTimes}/>}
            disableCloseOnEsc
            noOverlay
          >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
          </Menu>
        </div>

        <div id="navbar">
          <div className="nav-item">
            <Link to="/">LionBase</Link>
          </div>
          <div className="grow"></div>
          <div className="nav-item">
            <Link to="/about">About</Link>
          </div>
          <div className="nav-item">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="nav-item">
            <a target="_blank" href="https://medium.com/@lionbase.nyc">Blog</a>
          </div>
          <div className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="nav-item">
            <Link to="/apply">Apply</Link>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default compose(
)(NavBar)