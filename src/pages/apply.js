import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'react-compose'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import { Link } from 'gatsby'
import TextRow from '../components/TextRow'


class Apply extends Component {

  static propTypes = {}

  state = {}

  render() {
    const siteTitle = 'Apply'
    const subTitle = 'Learn more about how you can work with us'
    const header = ''
    const subHeader = ''

    return (
      <Layout
        title={siteTitle}
        subtitle={subTitle}
        navbar_children={
          <div className="actions-box">
            <ul className="actions">
              <li><Link to="/apply/#student" className="button scrolly">For Students</Link></li>
            </ul>
            <ul className="actions">
              <li><Link to="/apply/#client" className="button scrolly">For Companies</Link></li>
            </ul>
          </div>
        }
      >
        <Helmet title={siteTitle}/>

        <TextRow header="Student Tracks"
                 subheader={subHeader}>
          <div className="grid-wrapper card-container">
            <div className="col-4">
              <div className="project-card">
                <span className="icon major fa-asterisk style2 fit"></span>
                <h4>Product Development Team</h4>
                <small>Wachsman</small>
                <p>Wachsman is a leading professional services agency in the blockchain industry. We will develop NLP
                  models for analyzing</p>
              </div>
            </div>
            <div className="col-4">
              <div className="project-card">
                <span className="icon major fa-asterisk style2 fit"></span>
                <h3>Data Science Team</h3>
                <small>Shapiro-Bernstein</small>
                <p>Wachsman is a leading professional services agency in the blockchain industry. We will develop NLP
                  models for analyzing</p>
              </div>
            </div>
            <div className="col-4">
              <div className="project-card">
                <span className="icon major fa-asterisk style2 fit"></span>
                <h3>Mentor Team</h3>
                <small>Shapiro-Bernstein</small>
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
)(Apply)