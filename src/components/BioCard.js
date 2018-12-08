import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class BioCard extends React.Component {

  static defaultProps = {
    // key: '',
    name: '',
    position: '',
    year: '',
    major: '',
    portfolio_url: '',
    github_url: '',
    linkedin_url: '',
    image_sizes: null, // ImageSharp Gatsby https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e
  }


  render() {
    const {
      key,
      name, position, year, major,
      portfolio_url, github_url, linkedin_url,
      image_sizes,
    } = this.props
    // const image_url = name.replace(/\s/g, '');
    // import image from image_src
    // var icon_render = (icon === null) ? null : <span className={"icon major " + icon}></span>
console.log(major)
    return (
      <div className="biocard-column">
        <div className="biocard">

          <div className="img-container">
            <Img
              title={name}
              sizes={image_sizes}
            />
          </div>
          <div className="info-container">
            <p className="name">{name}</p>
            <p className="position"><i>{position}</i></p>
            <p className="major">{major}</p>
          </div>
          <div className="icons-container">
            {portfolio_url &&
            <a target="_blank" href={portfolio_url}><FontAwesomeIcon icon={faGlobe}/></a>
            }
            {github_url &&
            <a target="_blank" href={github_url}><FontAwesomeIcon icon={faGithub}/></a>
            }
            {linkedin_url &&
            <a target="_blank" href={linkedin_url}><FontAwesomeIcon icon={faLinkedin}/></a>
            }
          </div>
        </div>
      </div>
    )
  }
}

BioCard.propTypes = {
  // key: PropTypes.number,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  portfolio_url: PropTypes.string.isRequired,
  github_url: PropTypes.string.isRequired,
  linkedin_url: PropTypes.string.isRequired,
  image_sizes: PropTypes.object.isRequired,
}

export default BioCard