import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import TextRow from '../components/TextRow'
import LionIcon from '../assets/images/lion-simple.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBolt, faCalendar } from '@fortawesome/free-solid-svg-icons'



import { Link } from 'gatsby'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'LIONBASE'
    const subTitle = 'Columbia student driven solutions for industry problems'
    const header = 'Our mission is to learn and deliver.'
    const subHeader = 'LionBase works to foster inclusivity at the intersection of data science and product development by connecting students and companies through impactful data products.'

    return (
      <Layout
        title={siteTitle}
        subtitle={subTitle}
        icon={(<img className="home-icon" src={LionIcon} />)}
        // navbar_children={
        //   <div className="actions-box">
        //     <ul className="actions">
        //       <li><Link to="/about" className="button scrolly">Learn more</Link></li>
        //     </ul>
        //     <ul className="actions">
        //       <li><Link to="/apply" className="button scrolly">Apply now</Link></li>
        //     </ul>
        //   </div>
        // }
        >
        <Helmet title={siteTitle}>
          <meta name="google-site-verification" content="LIUG6pjUZ6emRZ2deb107qM_bclQ7iqgihk1tLZ4MdM" />
        </Helmet>
        <TextRow header={header} subheader={subHeader}/>

        <section id="two" className="main style2">
          <ul className="major-icons card-container">
            <li>
              <div className="grid-card">
                <FontAwesomeIcon icon={faCode} className="icon style11 major"/>
                {/*<span className="icon style1 major fa-code"></span>*/}
                <h3>Who We Are</h3>
                <p>We are a group of Columbia students passionate about working on real-world data problems. </p>
              </div>
            </li>
            <li>
              <div className="grid-card">
                <FontAwesomeIcon icon={faBolt} className="icon style11 major"/>
                <h3>What We Do</h3>
                <p>We focus on exploring data projects related to Data Analytics, Machine Learning, NLP, Statistical
                  Analysis, and more.</p>
              </div>
            </li>
            <li>
              <div className="grid-card">
                <FontAwesomeIcon icon={faCalendar} className="icon style11 major"/>
                <h3>How We Work</h3>
                <p>Students learn through exploratory projects for companies while building genuine relationships.</p>
              </div>
            </li>
          </ul>
          <div className="grid-wrapper">
          </div>
        </section>

        <section id="two" className="main style4 statistics">
          <ul className="major-icons card-container">
            <li>
              <div className="grid-card">
                <h1>18%</h1>
                <p>Underrepresented Minority</p>
                </div>
            </li>
            <li>
              <div className="grid-card">
                <h1>34%</h1>
                <p>Female</p>
              </div>
            </li>
            <li>
              <div className="grid-card">
                <h1>48%</h1>
                <p>Receiving Financial Aid</p>
              </div>
            </li>
            <li>
              <div className="grid-card">
                <h1>28%</h1>
                <p>First-Generation Students</p>
              </div>
            </li>
          </ul>
        </section>

        <section id="two" className="main style7 statistics">
        <ul className="major-icons card-container">
            <li>
              <div className="grid-card">
                <h1>44%</h1>
                <p>Computer Science</p>
                </div>
            </li>
            <li>
              <div className="grid-card">
                <h1>16%</h1>
                <p>Operations Research</p>
              </div>
            </li>
            <li>
              <div className="grid-card">
                <h1>22%</h1>
                <p>Applied Math or Statistics</p>
              </div>
            </li>
            <li>
              <div className="grid-card">
                <h1>18%</h1>
                <p>Other</p>
              </div>
            </li>
          </ul>
        </section>

        <TextRow
          header="Interested in working with us?"
          subheader='We help companies in New York City evaluate and address "medium-sized" problems through data science
          and product development. Click here to find out what it is like to work with us.'
          className="style7"
        >
          <div className="align-center">
            <Link to="/apply/#client" className="button style4">Work with us</Link>
          </div>
        </TextRow>

      </Layout>
    )
  }
}

export default Homepage