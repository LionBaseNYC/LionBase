import React, { Component } from 'react'
import { compose } from 'react-compose'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import { Link } from 'gatsby'
import TextRow from '../components/TextRow'


class NotFoundPage extends Component {

  static propTypes = {}

  state = {}

  render() {
    const siteTitle = 'Oops! Page Not Found'
    const subTitle = 'We are sorry, but the page you requested was not found'
    const header = ''
    const subHeader = ''

    return (
      <Layout
        title={siteTitle}
        subtitle={subTitle}
      >
        <Helmet title={siteTitle}/>

        <TextRow header={header} subheader={<p>{subHeader}</p>}/>


      </Layout>
    )
  }
}

export default compose(
)(NotFoundPage)