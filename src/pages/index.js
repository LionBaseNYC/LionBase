import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import TextRow from '../components/TextRow'
import LionIcon from '../assets/images/lion-simple.png'


import { Link } from 'gatsby'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'LionBase @ CU'
    const subTitle = 'Columbia student driven solutions for industry problems'
    const header = 'Our Mission'
    const subHeader = 'LionByte is a data product development group that aims to connect driven students interested in data science, product design, statistics, or computer science with meaningful industry applications.'

    return (
      <Layout
        title={siteTitle}
        subtitle={subTitle}
        icon={(<img className="home-icon" src={LionIcon} />)}
        navbar_children={
          <div className="actions-box">
            <ul className="actions">
              <li><Link to="/about" className="button scrolly">Learn more</Link></li>
            </ul>
            <ul className="actions">
              <li><Link to="/apply" className="button scrolly">Apply now</Link></li>
            </ul>
          </div>
        }>
        <Helmet title={siteTitle}/>

        <TextRow header={header} subheader={subHeader}/>

        <section id="two" className="main style2">
          <ul className="major-icons card-container">
            <li>
              <div className="grid-card">
                <span className="icon style1 major fa-code"></span>
                <h3>Who we are</h3>
                <p>We are a group of Columbia students passionate about working on real-world data problems. </p>
              </div>
            </li>

            <li>
              <div className="grid-card">
                <span className="icon style2 major fa-bolt"></span>
                <h3>What We Do</h3>
                <p>We focus on exploring data projects related to Data Analytics, Machine Learning, NLP, Statistical
                  Analysis, and more..</p>
              </div>
            </li>
            <li>
              <div className="grid-card">
                <span className="icon style3 major fa-calendar"></span>
                <h3>How We Work</h3>
                <p>Students learn through exploratory projects for companies while building genuine relationships.</p>
              </div>
            </li>
          </ul>
          <div className="grid-wrapper">
          </div>
        </section>

        <TextRow
          header="Get Involved"
          subheader="We are looking for students who like to solve problems, and companies that need to solve problems. Please
              reach out if you fall under either category!"
          className="style7"
        >
          <div className="align-center">
            <Link to="/apply" className="button style4">Apply</Link>
          </div>
        </TextRow>

      </Layout>
    )
  }
}

export default Homepage