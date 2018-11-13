import Layout from './layout'
import React, { Component } from 'react'

class TextRow extends Component {

  static defaultProps = {
    header: 'Header',
    subheader: 'Subheader',
  }


  render() {
    const { header, subheader, children } = this.props

    return (
      <div>
        <section id="one" className="main style1">
          <div className="page-section-wrapper">
            <div className="page-section">
              <header className="major">
                <h2>{header}</h2>
              </header>
              <p>
                {subheader}
              </p>
            </div>
          </div>
          {children}
        </section>
      </div>
    )
  }
}


export default TextRow