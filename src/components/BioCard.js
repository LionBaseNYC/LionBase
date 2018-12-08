import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import '../assets/scss/biocard.scss'


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

    return (
      <div className="bio_card">
        <Img
          title={name}
          sizes={image_sizes}
        />
        <h2>{name}</h2>
        <p>{position}</p>
        <p>{major}</p>

        {portfolio_url &&
        <a href={portfolio_url}><FontAwesomeIcon icon={faGlobe}/></a>
        }
        {github_url &&
        <a href={github_url}><FontAwesomeIcon icon={faGithub}/></a>
        }
        {linkedin_url &&
        <a href={linkedin_url}><FontAwesomeIcon icon={faLinkedin}/></a>
        }
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