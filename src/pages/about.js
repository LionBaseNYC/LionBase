import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'react-compose'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import { Link } from 'gatsby'
import TextRow from '../components/TextRow'


class Apply extends Component {

  static propTypes = {}

  state = {}

  render() {
    const siteTitle = 'About Us'
    const subTitle = 'Learn more about who we are and what we do'
    const header = 'Our Core Values'
    const subHeader = 'We take pride in our reputation for quality work. Our mission is to foster a community of student developers, data scientists, and mathematicians who are driven to learn.'

    return (
      <Layout
        title={siteTitle}
        subtitle={subTitle}
      >
        <Helmet title={siteTitle}/>

        <TextRow header={header} subheader={subHeader}>
          <div className="grid-wrapper">
            <div className="col-4">
              <span className="icon style3 major fa-user-circle-o fit"></span>
              <h3>People First</h3>
              <p>Build relationships together and place users at the center of our work</p>
            </div>
            <div className="col-4">
              <span className="icon style3 major fa-handshake-o fit"></span>
              <h3>Communication & Honesty</h3>
              <p>Speak honestly to each other and to industry partners</p>
            </div>
            <div className="col-4">
              <span className="icon style3 major fa-line-chart fit"></span>
              <h3>Continuous Growth</h3>
              <p>Strive to consistently improve personally and professionally</p>
            </div>
          </div>

        </TextRow>

      </Layout>
    )
  }
}

export default compose(
)(Apply)