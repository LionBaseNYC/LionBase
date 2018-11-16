import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { compose } from 'react-compose'

import "../assets/scss/navbar.scss";

class NavBar extends Component {


  render() {
    return (
      <React.Fragment>
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