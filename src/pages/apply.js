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

        <div id="student"></div>
        <TextRow header="Student Tracks"
                 subheader="Why join LionBase?">
          <div className="card-container">
            <div className="project-card">
              <FontAwesomeIcon icon={faTerminal} className="icon style7 major naked"/>
              {/*<span className="icon major fa-terminal style7 fit"></span>*/}
              <h4>Product Development</h4>
              <p>For students interested in product-based problems, such as design, back-end / front-end / full-stack
                development, and software engineering.</p>
            </div>
            <div className="project-card">
              <FontAwesomeIcon icon={faSignal} className="icon style7 major naked"/>
              {/*<span className="icon major fa-signal style7 fit"></span>*/}
              <h4>Data Science</h4>
              <p>For students interested in mathematical and analytical problems such as statistical analysis, data
                analysis, machine learning, and natural language processing.</p>
            </div>
            <div className="project-card">
              <FontAwesomeIcon icon={faGraduationCap} className="icon style7 major naked"/>
              {/*<span className="icon major fa-graduation-cap style7 fit"></span>*/}
              <h4>Mentorship</h4>
              <p>For students with limited experience but an eagerness to learn applicable data science and product
                development skills.</p>
            </div>

          </div>
        </TextRow>
        <div className="align-center">
          <a target="_blank"
             href="https://docs.google.com/forms/d/e/1FAIpQLScMghB7rFjjQriIBcFzi6BbCKbiSNgMWPEciaJW9WoXfnFNew/viewform"
             className="button style4">Student Application</a>
        </div>

        <div id="client"></div>
        <TextRow id="client" header="Companies"
                 subheader="Why work with LionBase?">
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
        <div className="align-center">
          <a target="_blank" href="https://lionbase1.typeform.com/to/ZQXVCO" className="button style4">Client
            Application</a>
        </div>
      </Layout>
    )
  }
}

export default compose(
)(Apply)