import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'react-compose'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import { Link } from 'gatsby'


class Apply extends Component {

  static propTypes = {}

  state = {}

  render() {
    const siteTitle = 'Apply'
    const subTitle = 'Learn more about how you can work with us'

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

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Lorem ipsum dolor adipiscing<br/>
                  amet dolor consequat</h2>
              </header>
              <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet
                vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id
                accumsan.</p>
            </div>
            <div className="col-6">
              <span className="image fit"><img src={pic01} alt=""/></span>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default compose(
)(Apply)