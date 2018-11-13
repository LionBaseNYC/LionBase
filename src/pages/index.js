import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PageHeader from '../components/PageHeader'

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
        icon='fa-cloud'
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

        <PageHeader header={header} subheader={subHeader}/>

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
                <p>We focus on exploring data projects related to Analytics, Machine Learning, NLP, Trading, and
                  more.</p>
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

        <section id="three" className="main style3 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Our Core Values</h2>
              </header>
              {/*<p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>*/}
            </div>

            <div className="col-4">
              {/*<span className="image fit"><img src={pic02} alt=""/></span>*/}
              <h3>People First</h3>
              <p>Build relationships together and place users at the center of our work</p>
              <ul className="actions">
                <li><a href="#" className="button">More</a></li>
              </ul>
            </div>
            <div className="col-4">
              {/*<span className="image fit"><img src={pic03} alt=""/></span>*/}
              <h3>Communication & Honesty</h3>
              <p>Speak honestly to each other and to industry partners</p>
              <ul className="actions">
                <li><a href="#" className="button">More</a></li>
              </ul>
            </div>
            <div className="col-4">
              {/*<span className="image fit"><img src={pic04} alt=""/></span>*/}
              <h3>Continuous Growth</h3>
              <p>Strive to consistently improve personally and professionally</p>
              <ul className="actions">
                <li><a href="#" className="button">More</a></li>
              </ul>
            </div>

          </div>
        </section>

        <section id="four" className="main style7 special">
          <div className="container">
            <header className="major">
              <h2>Get Involved</h2>
            </header>
            <p>We are looking for </p>
            <ul className="actions uniform">
              <li><a href="#" className="button special">Sign Up</a></li>
              <li><a href="#" className="button">Learn More</a></li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage