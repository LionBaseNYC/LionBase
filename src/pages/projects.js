import React, { Component } from 'react'
import { compose } from 'react-compose'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import TextRow from '../components/TextRow'
import ProjectCard from '../components/ProjectCard'

import '../assets/scss/projects.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'

export const query = graphql`
  query {
    logos: allFile(filter: { absolutePath: { regex: "/company-logos/" } }) {
      edges {
        node {
          name
          prettySize
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

class Projects extends Component {

  static propTypes = {}

  state = {
    logoImages: null,
  }

  componentDidMount() {

    this.setState({
      logoImages: this.props.data.logos.edges.map(e => e.node.childImageSharp.sizes),
    })
  }

  render() {
    const siteTitle = 'PROJECTS'
    const subTitle = 'Check out our current and previous projects'

    const logoImages = this.state.logoImages
    console.log(logoImages)

    return (
      <Layout title={siteTitle}
              subtitle={subTitle}
      >
        <Helmet title={siteTitle}/>

        <TextRow header="Our students have worked at..."
                 subheader=''>
        </TextRow>

        <div className="logos-holder">
          {logoImages && logoImages.map((logoSize, index) => {

            return (
              <div key={index} className="logo-column">
                <div className="logo-container">
                  <Img
                    // title={name}
                    sizes={logoSize}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/*<TextRow header="Past Projects"*/}
        {/*subheader='Check out our previous projects.'>*/}
        {/*<div className="card-container">*/}
        {/*<div className="project-card">*/}
        {/*<FontAwesomeIcon icon={faAsterisk} className="icon style7 major naked"/>*/}

        {/*/!*<span className="icon major fa-asterisk style7 fit"></span>*!/*/}
        {/*<h3>Natural Language Processing for Blockchain PR</h3>*/}
        {/*<small>Wachsman</small>*/}
        {/*<h4>Company Description</h4>*/}
        {/*<p>*/}
        {/*Wachsman is a leading professional services agency in the blockchain industry.*/}
        {/*</p>*/}
        {/*<h4>Data Science</h4>*/}
        {/*<p>*/}
        {/*We will develop various NLP model and Data Analytics to explore the impact of PR in the blockchain*/}
        {/*industry.*/}
        {/*</p>*/}
        {/*<h4>Product Development</h4>*/}
        {/*<p>*/}
        {/*An accompanying application to communicate metrics will be built for company use with minimum*/}
        {/*deployment in NY and potential deployment in Europe and Asia.*/}

        {/*Users include external client executives, blockchain technology consumers, and the PR and Operations*/}
        {/*branch of Wachsman.*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*<div className="project-card">*/}
        {/*<FontAwesomeIcon icon={faAsterisk} className="icon style7 major naked"/>*/}
        {/*<h3>Anomaly Detection and Machine Learning for Song Royalties</h3>*/}
        {/*<small>Shapiro Bernstein</small>*/}
        {/*<h4>Company Description</h4>*/}
        {/*<p>*/}
        {/*Shapiro Bernstein is an influential, 100+ year old music publisher.*/}
        {/*</p>*/}
        {/*<h4>Data Science</h4>*/}
        {/*<p>*/}
        {/*We will develop anomaly detection models and apply machine learning towards predicting song income to*/}
        {/*explore how royalty data can be utilized strategically.*/}
        {/*</p>*/}
        {/*<h4>Product Development</h4>*/}
        {/*<p>*/}
        {/*An accompanying application with visualizations will be built for company use, with deployment in NY.*/}

        {/*Users include the Executive and Royalties & Licensing branches of Shapiro Bernstein, and third party*/}
        {/*sources who report income to Shapiro Bernstein.*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*<div className="project-card">*/}
        {/*<FontAwesomeIcon icon={faAsterisk} className="icon style8 major naked"/>*/}
        {/*<h3>Mentored Project</h3>*/}
        {/*<small>Mentored Project</small> */}
        {/*<h4>Project Description</h4>*/}
        {/*<p>*/}
        {/*Select a set of NY residents and create an interactive way for them to explore health data.*/}
        {/*</p>*/}
        {/*<h4>Data Science</h4>*/}
        {/*<p>*/}
        {/*We will apply fundamental data science techniques and exploration methods to understand publicly*/}
        {/*available NY health data.*/}
        {/*</p>*/}
        {/*<h4>Product Development</h4>*/}
        {/*<p>*/}
        {/*An accompanying application with visualizations will be built for selected set of users, with*/}
        {/*deployment in NY.*/}

        {/*Users defined by mentored teams.*/}
        {/*</p>*/}
        {/*</div>  */}
        {/*</div>*/}
        {/*<div className="card-container">*/}
        {/*<div className="project-card">*/}
        {/*<FontAwesomeIcon icon={faAsterisk} className="icon style8 major naked"/>*/}
        {/*<h3>Mentored Project</h3>*/}
        {/*<small>Mentored Project</small>*/}
        {/*<h4>Project Description</h4>*/}
        {/*<p>*/}
        {/*Select a set of NY residents and create an interactive way for them to explore health data.*/}
        {/*</p>*/}
        {/*<h4>Data Science</h4>*/}
        {/*<p>*/}
        {/*We will apply fundamental data science techniques and exploration methods to understand publicly*/}
        {/*available NY health data.*/}
        {/*</p>*/}
        {/*<h4>Product Development</h4>*/}
        {/*<p>*/}
        {/*An accompanying application with visualizations will be built for selected set of users, with*/}
        {/*deployment in NY.*/}
        {/**/}
        {/*Users defined by mentored teams.*/}
        {/*</p>*/}
        {/*</div>    */}
        {/*</div>*/}
        {/*<div className="card-container">*/}
        {/*<div className="project-card">*/}
        {/*<FontAwesomeIcon icon={faAsterisk} className="icon style7 major naked"/>*/}
        {/*<h3>Crypto-Asset Risk Management</h3>*/}
        {/*<small>Wachsman</small>*/}
        {/*<p>A modular crypto asset exploration application to iterate portfolio optimizations, risk mitigations,*/}
        {/*client pricing strategies, and other data insights.</p>*/}
        {/*</div>*/}
        {/*<div className="project-card">*/}
        {/*<FontAwesomeIcon icon={faAsterisk} className="icon style7 major naked"/>*/}
        {/*<h3>Database Systems for Music Publishing</h3>*/}
        {/*<small>Shapiro Bernstein</small>*/}
        {/*<p>A novel database system and software application to enable fast, robust, no-frills data management*/}
        {/*for licensing companies.</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</TextRow>*/}
      </Layout>
    )
  }
}

export default compose(
)(Projects)