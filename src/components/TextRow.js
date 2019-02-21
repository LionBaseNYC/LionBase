import Layout from './layout'
import React, { Component } from 'react'

class TextRow extends Component {

  static defaultProps = {
    header: 'Header',
    subheader: 'Subheader',
    className: 'style1',
  }


  render() {
    const { header, subheader, className, children } = this.props

    return (
      <div>
        <section id="one" className={`main ${className}`}>
          <div className="page-section-wrapper">
            <div className="page-section">
              <header className="major">
                <h2>{header}</h2>
              </header>
                {subheader}
            </div>
          </div>
          {children}
        </section>
      </div>
    )
  }
}


export default TextRow