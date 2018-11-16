import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'react-compose'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import { Link } from 'gatsby'
import TextRow from '../components/TextRow'


class Contact extends Component {

  static propTypes = {}

  state = {}

  render() {
    const siteTitle = 'Contact Us'
    const subTitle = 'Reach out with client inquiries'
    const header = 'Our Core Values'
    const subHeader = 'LionBase is a data product development group that aims to connect driven students interested in data science, product design, statistics, or computer science with meaningful industry applications.'
    return (
      <Layout
        title={siteTitle}
        subtitle={subTitle}
      >
        <Helmet title={siteTitle}/>
        <TextRow
          header="Email us at"
          subheader="lionbase.nyc@gmail.com"
        />

      </Layout>
    )
  }
}

export default compose(
)(Contact)