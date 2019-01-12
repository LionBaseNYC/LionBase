import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'react-compose'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import { Link } from 'gatsby'
import TextRow from '../components/TextRow'
import {
  faTerminal,
  faSignal,
  faGraduationCap,
  faPencilRuler,
  faChartLine,
  faHandHoldingUsd,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Apply extends Component {

  static propTypes = {}

  state = {}

  render() {
    const siteTitle = 'WORK WITH US'
    const subTitle = '.'
    const header = ''
    const subHeader = ''

    return (
      <Layout
        title={siteTitle}
        subtitle={<span>
          Send us inquiries or schedule a consultation with us{' '}
          <a href="https://lionbase1.typeform.com/to/ZQXVCO" target="_blank">
            <span className="highlight">here</span>
          </a>
        </span>}
      >
        <Helmet title={siteTitle}/>

        <div id="client"></div>
        <TextRow id="client" header="Why work with LionBase?"
                 subheader="">
          <div className="card-container">
            <div className="project-card">
              <FontAwesomeIcon icon={faPencilRuler} className="icon style7 major naked"/>
              {/*<span className="icon major fa-pencil-ruler style7 fit"></span>*/}
              <h4>What Problems We Solve</h4>
              <p>We help companies in New York City evaluate and address "medium-sized" problems through data science
                and product development.
              </p>
              <p>Medium-sized problems describe challenges that may or may not require a full-time team or hire, but
                large enough to add serious business value if solved.</p>
            </div>
            <div className="project-card">
              <FontAwesomeIcon icon={faChartLine} className="icon style7 major naked"/>
              {/*<span className="icon major fa-chart-line style7 fit"></span>*/}
              <h4>Low-Risk, High Return</h4>
              <p>Hiring full-time or working with high-priced consultants is a big investment.
              </p>
              <p>Save money without losing quality by working with teams of bright Columbia students who have access to
                professors, university resources, and a diverse student body.</p>
            </div>
          </div>
          <div className="card-container">
            <div className="project-card big">
              <FontAwesomeIcon icon={faGraduationCap} className="icon style7 major naked"/>
              {/*<span className="icon major fa-graduation-cap style7 fit"></span>*/}
              <h4>Where Company Payments Go</h4>
              <p>Payments go towards project expenses (e.x. API costs) and towards student stipends -- with priority for
                students on financial aid -- to reduce the opportunity cost of investing time in projects.
              </p><p>
              Asking for payments is our way of ensuring students are valued properly and that companies are invested
              in working with LionBase.
            </p><p>
              Payments are negotiated on a client-by-client basis, depending on the scope of work.</p>
            </div>
          </div>
        </TextRow>
        {/* <div className="align-center">
          <a target="_blank" href="https://lionbase1.typeform.com/to/ZQXVCO" className="button style4">Client Inquiry Application</a>
        </div> */}

      </Layout>
    )
  }
}

export default compose(
)(Apply)