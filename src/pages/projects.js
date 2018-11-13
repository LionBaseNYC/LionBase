import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'react-compose'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import { Link } from 'gatsby'
import TextRow from '../components/TextRow'


class Projects extends Component {

  static propTypes = {}

  state = {}

  render() {
    const siteTitle = 'Projects'
    const subTitle = 'Check out our current and previous projects'

    return (
      <Layout title={siteTitle}
              subtitle={subTitle}
      >
        <Helmet title={siteTitle}/>

        <TextRow header="Current Projects"
                 subheader='We work on projects every semester. Take a look at our collaborations for this semester (more to come).'>
          <div className="grid-wrapper card-container">
            <div className="col-4">
              <div className="project-card">
                <span className="icon major fa-asterisk style2 fit"></span>
                <h3>Natural Language Processing for PR</h3>
                <small>Wachsman</small>
                <p>Wachsman is a leading professional services agency in the blockchain industry. We will develop NLP
                  models for analyzing</p>
              </div>
            </div>
            <div className="col-4">
              <div className="project-card">
                <span className="icon major fa-asterisk style2 fit"></span>
                <h3>SA and ML for Song Royalties</h3>
                <small>Shapiro-Bernstein</small>
                <p>Wachsman is a leading professional services agency in the blockchain industry. We will develop NLP
                  models for analyzing</p>
              </div>
            </div>
            <div className="col-4">
              <div className="project-card">
                <span className="icon major fa-asterisk style2 fit"></span>
                <h3>Natural Language Processing for PR</h3>
                <small>Wachsman</small>
                <p>Wachsman is a leading professional services agency in the blockchain industry. We will develop NLP
                  models for analyzing</p>
              </div>
            </div>
          </div>
        </TextRow>

        <TextRow header="Past Projects"
                 subheader='Check out our previous projects.'>
          <div className="grid-wrapper card-container">
            <div className="col-4">
              <div className="project-card">
                <span className="icon major fa-asterisk style2 fit"></span>
                <h3>Natural Language Processing for PR</h3>
                <small>Wachsman</small>
                <p>Wachsman is a leading professional services agency in the blockchain industry. We will develop NLP
                  models for analyzing</p>
              </div>
            </div>
            <div className="col-4">
              <div className="project-card">
                <span className="icon major fa-asterisk style2 fit"></span>
                <h3>SA and ML for Song Royalties</h3>
                <small>Shapiro-Bernstein</small>
                <p>Wachsman is a leading professional services agency in the blockchain industry. We will develop NLP
                  models for analyzing</p>
              </div>
            </div>
            <div className="col-4">
              <div className="project-card">
                <span className="icon major fa-asterisk style2 fit"></span>
                <h3>Natural Language Processing for PR</h3>
                <small>Wachsman</small>
                <p>Wachsman is a leading professional services agency in the blockchain industry. We will develop NLP
                  models for analyzing</p>
              </div>
            </div>
          </div>
        </TextRow>
      </Layout>
    )
  }
}

export default compose(
)(Projects)