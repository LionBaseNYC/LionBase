import React from 'react'
import { faFacebook, faGithubSquare, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="footer-sub">
          <ul className="icons">
            <li>
              <a target="_blank" href="https://www.facebook.com/lionbase.nyc" className="footer-link">
                <FontAwesomeIcon icon={faFacebook} className="icon footer-icon"/>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/LionBase " className="footer-link">
                <FontAwesomeIcon icon={faGithubSquare} className="icon footer-icon"/>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://medium.com/@lionbase.nyc" className="footer-link">
                <FontAwesomeIcon icon={faMedium} className="icon footer-icon"/>
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:lionbase.nyc@gmail.com" className="footer-link">
                <FontAwesomeIcon icon={faEnvelopeSquare} className="icon footer-icon"/>
              </a>
            </li>
          </ul>

          <ul className="copyright">
            <li>&copy; lionbase.nyc</li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Footer