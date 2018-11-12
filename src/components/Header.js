import React from 'react'
import NavBar from './NavBar'

class Header extends React.Component {

  static defaultProps = {
    title: 'LionBase @ CU',
  }

  render() {
    return (
      <div>

        <section id="header">
          <NavBar/>
          <div className="inner">
            <span className="icon major fa-cloud"></span>
            <h1><strong>{this.props.title}</strong></h1>
            <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br/>
              lobortis feugiat sapien sed etiam volutpat accumsan.</p>
            <ul className="actions">
              <li><a href="#one" className="button scrolly">Discover</a></li>
            </ul>
          </div>
        </section>
      </div>

    )
  }
}

export default Header
