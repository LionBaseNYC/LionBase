import React from 'react'

class BioCard extends React.Component {

  static defaultProps = {
    name: '',
    title: '',
    major: '',
    portfolio_url: '',
    github_url: '',
    linkedin_url: '',
  }

  render() {
    const {name, title, portfolio_url, github_url, linkedin_url} = this.props;
    // var icon_render = (icon === null) ? null : <span className={"icon major " + icon}></span>

    return (
      <div className="bio_card">
        
      </div>
    )
  }
}

export default BioCard