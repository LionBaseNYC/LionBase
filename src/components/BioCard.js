import React from 'react'

import "../assets/scss/main.scss"
import "../assets/scss/biocard.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

class BioCard extends React.Component {

  static defaultProps = {
    name: '',
    title: '',
    major: '',
    portfolio_url: '',
    github_url: '',
    linkedin_url: '',
    image_src: '',
  }


  render() {
    const {name, title, major, portfolio_url, github_url, linkedin_url, image_src} = this.props;
    // import image from image_src
    // var icon_render = (icon === null) ? null : <span className={"icon major " + icon}></span>

    return (
      <div className="bio_card">
        <img className ='object_fit_full' src = {image_src}/>
        <p>
        <b>{name}</b>
        <br/>
        {title}
        <br/>
        {major}
        
        <br/>
        {portfolio_url && 
            <a href={portfolio_url}><FontAwesomeIcon icon = {faGlobe}/></a>
          }
        {github_url && 
            <a href={github_url}><FontAwesomeIcon icon = {faGithub}/></a>
          }
        {linkedin_url && 
            <a href={linkedin_url}><FontAwesomeIcon icon = {faLinkedin}/></a>
          }
        </p>

      </div>
    )
  }
}

export default BioCard