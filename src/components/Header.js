import React from 'react'
import NavBar from './NavBar'
import { Link } from 'gatsby'

class Header extends React.Component {

  static defaultProps = {
    title: 'LionBase @ CU',
    subtitle: 'Subtitle here',
    icon: null,
    navbar_children: null,
  }

  render() {
    const {title, subtitle, icon, navbar_children} = this.props;
    var icon_render = (icon === null) ? null : <span className={"icon major " + icon}></span>

    return (
      <div id="header-container">
        <NavBar/>
        <section id="header">
          <div className="inner">
            {icon_render}
            <h1><strong>{title}</strong></h1>
            <p>{subtitle}</p>
            {navbar_children}
          </div>
        </section>
      </div>

    )
  }
}

export default Header
