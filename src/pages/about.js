import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-compose';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import BioCard from '../components/BioCard';

import '../assets/scss/about.scss';

import TextRow from '../components/TextRow';
import BioTextRow from '../components/TextRow';
import {
  faUserCircle,
  faHandshake,
  faChartLine,
  faPaintBrush,
  faPeopleCarry,
  faShapes,
  faUsers,
  faMicroscope,
  faBriefcase,
  faCode,
  faBolt,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const query = graphql`
  query {
    members: allJson {
      edges {
        node {
          Teams {
            Executive {
              name
              position
              year
              major
              photo_id
              linkedin_url
              github_url
              portfolio_url
            }
            Team_Lead {
              name
              position
              year
              major
              photo_id
              linkedin_url
              github_url
              portfolio_url
            }
            Client {
              name
              position
              year
              major
              photo_id
              linkedin_url
              github_url
              portfolio_url
            }
            Product_Dev {
              name
              position
              year
              major
              photo_id
              linkedin_url
              github_url
              portfolio_url
            }
            Research {
              name
              position
              year
              major
              photo_id
              linkedin_url
              github_url
              portfolio_url
            }
            Advisors {
              name
              position
              year
              major
              photo_id
              linkedin_url
              github_url
              portfolio_url
            }
          }
        }
      }
    }
    headshots: allFile(filter: { absolutePath: { regex: "/member-photos/" } }) {
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
`;

class Apply extends Component {
  static propTypes = {};

  state = {
    imageData: null,
    memberData: null,
  };

  componentDidMount () {
    const imageDict = {};
    const headshotData = this.props.data.headshots.edges;

    for (var i = 0; i < headshotData.length; i++) {
      imageDict[headshotData[i].node.name] = {
        // 'id': headshotData[i].node.id,
        name: headshotData[i].node.name,
        sizes: headshotData[i].node.childImageSharp.sizes,
      };
    }

    this.setState({
      memberData: this.props.data.members.edges[0].node.Teams,
      imageData: imageDict,
    });
  }

  render () {
    // console.log(images);
    const siteTitle = 'ABOUT US',
      subTitle = 'Learn more about who we are and what we do',
      header = 'Our Core Values',
      subHeader =
        'LionBase is a data product development group that aims to connect driven students interested in data science, product design, statistics, or computer science with meaningful industry applications.',
      structHeader = 'Our Team Structure',
      subStructHeader =
        'We have three primary groups: client teams, research teams, and the executive team',
      execHeader = 'Executive Team',
      subExecHeader = 'Meet the organizers of LionBase',
      leadHeader = 'Team Leads',
      subLeadHeader = 'Meet the client-facing project leads',
      teamHeader = 'Client Team Members',
      subTeamHeader =
        'Meet the people who build data science and product development solutions for our clients',
      researchHeader = 'Research Team Members',
      subResearchHeader =
        'Meet the people expanding our understanding of data science',
      pdHeader = 'Product Development Team Members',
      subPdHeader =
        'Meet the people who work closely with our client teams to build and deploy our products',
      advisorHeader = 'Advisors',
      subAdvisorHeader =
        'Meet our advisors';

    const { memberData, imageData } = this.state;
    // console.log(memberData)

    return (
      <Layout title={siteTitle} subtitle={subTitle}>
        <Helmet title={siteTitle}/>

        {/* KEV TODO */}
        {/* <BioCard name={} title={} major={} portfolio_url={}/> */}
        <section id="two" className="main style1">
          <ul className="major-icons card-container">
            <li>
              <div className="grid-card">
                <FontAwesomeIcon icon={faCode} className="icon style4 major"/>
                {/*<span className="icon style1 major fa-code"></span>*/}
                <h3>Who We Are</h3>
                <p>
                  We are a group of Columbia students passionate about working
                  on real-world data problems.{' '}
                </p>
              </div>
            </li>
            <li>
              <div className="grid-card">
                <FontAwesomeIcon icon={faBolt} className="icon style4 major"/>
                <h3>What We Do</h3>
                <p>
                  We focus on exploring data projects related to Data Analytics,
                  Machine Learning, NLP, Statistical Analysis, and more.
                </p>
              </div>
            </li>
            <li>
              <div className="grid-card">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="icon style4 major"
                />
                <h3>How We Work</h3>
                <p>
                  Students learn through exploratory projects for companies
                  while building genuine relationships.
                </p>
              </div>
            </li>
          </ul>
          <div className="grid-wrapper"/>
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

        <TextRow header={header} subheader={<p>{subHeader}</p>}>
          <div className="grid-wrapper">
            <div className="col-4">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="icon style13 major naked"
              />
              {/*<span className="icon style3 major fa-user-circle-o fit"></span>*/}
              <h3>Clients First</h3>
              <p>
                Build relationships together and place our clients at the center
                of our work
              </p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon
                icon={faPaintBrush}
                className="icon style10 major naked"
              />
              {/*<span className="icon style3 major fa-line-chart fit"></span>*/}
              <h3>Innovation</h3>
              <p>Approach problems from creative perspectives</p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon
                icon={faShapes}
                className="icon style12 major naked"
              />
              {/*<span className="icon style3 major fa-line-chart fit"></span>*/}
              <h3>Diversity</h3>
              <p>
                Build diverse teams that value equity, inclusion, and dignity
                for all
              </p>
            </div>
          </div>
        </TextRow>
        <TextRow header={structHeader} subheader={<p>{subStructHeader}</p>}>
          <div className="grid-wrapper">
            <div className="col-4">
              <FontAwesomeIcon
                icon={faUsers}
                className="icon style7 major naked"
              />
              {/*<span className="icon style3 major fa-user-circle-o fit"></span>*/}
              <h3>Client Teams</h3>
              <p>
                Each client team consists of 6-8 students with significant
                experience in data science or product development.
              </p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon
                icon={faMicroscope}
                className="icon style8 major naked"
              />
              {/*<span className="icon style3 major fa-line-chart fit"></span>*/}
              <h3>Research Teams</h3>
              <p>
                Our research teams perform regular exploration of various data
                science fields to improve our work internally.
              </p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="icon style9 major naked"
              />
              {/*<span className="icon style3 major fa-line-chart fit"></span>*/}
              <h3>Executive Team</h3>
              <p>
                The executive team supports the client and research teams
                through business and operations.
              </p>
            </div>
          </div>
        </TextRow>

        {/* Executive */}
        <BioTextRow header={execHeader} subheader={<p>{subExecHeader}</p>}>
          <div className="biocards-holder">
            {memberData &&
            memberData[0].Executive.map((member, index) => {
              let imageID = member.photo_id
                ? member.photo_id
                : member.name.replace(/[^A-Z0-9]/gi, '');

              return (
                <BioCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  year={member.year}
                  major={member.major}
                  portfolio_url={member.portfolio_url}
                  github_url={member.github_url}
                  linkedin_url={member.linkedin_url}
                  image_sizes={imageData[imageID].sizes}
                />
              );
            })}
          </div>
        </BioTextRow>

        {/* Team Leads */}
        <BioTextRow header={leadHeader} subheader={<p>{subLeadHeader}</p>}>
          <div className="biocards-holder">
            {memberData &&
            memberData[1].Team_Lead.map((member, index) => {
              let imageID = member.photo_id
                ? member.photo_id
                : member.name.replace(/[^A-Z0-9]/gi, '');

              return (
                <BioCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  year={member.year}
                  major={member.major}
                  portfolio_url={member.portfolio_url}
                  github_url={member.github_url}
                  linkedin_url={member.linkedin_url}
                  image_sizes={imageData[imageID].sizes}
                />
              );
            })}
          </div>
        </BioTextRow>

        {/* Product Dev */}
        <BioTextRow header={pdHeader} subheader={<p>{subPdHeader}</p>}>
          <div className="biocards-holder">
            {memberData &&
            memberData[3].Product_Dev.map((member, index) => {
              let imageID = member.photo_id
                ? member.photo_id
                : member.name.replace(/[^A-Z0-9]/gi, '');

              return (
                <BioCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  year={member.year}
                  major={member.major}
                  portfolio_url={member.portfolio_url}
                  github_url={member.github_url}
                  linkedin_url={member.linkedin_url}
                  image_sizes={imageData[imageID].sizes}
                />
              );
            })}
          </div>
        </BioTextRow>

        {/* Client */}
        <BioTextRow header={teamHeader} subheader={<p>{subTeamHeader}</p>}>
          <div className="biocards-holder">
            {memberData &&
            memberData[2].Client.map((member, index) => {
              let imageID = member.photo_id
                ? member.photo_id
                : member.name.replace(/[^A-Z0-9]/gi, '');

              return (
                <BioCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  year={member.year}
                  major={member.major}
                  portfolio_url={member.portfolio_url}
                  github_url={member.github_url}
                  linkedin_url={member.linkedin_url}
                  image_sizes={imageData[imageID].sizes}
                />
              );
            })}
          </div>
        </BioTextRow>

        {/* Research */}
        <BioTextRow header={researchHeader} subheader={<p>{subResearchHeader}</p>}>
          <div className="biocards-holder">
            {memberData &&
            memberData[4].Research.map((member, index) => {
              let imageID = member.photo_id
                ? member.photo_id
                : member.name.replace(/[^A-Z0-9]/gi, '');

              return (
                <BioCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  year={member.year}
                  major={member.major}
                  portfolio_url={member.portfolio_url}
                  github_url={member.github_url}
                  linkedin_url={member.linkedin_url}
                  image_sizes={imageData[imageID].sizes}
                />
              );
            })}
          </div>
        </BioTextRow>

        {/* Advisors */}
        <BioTextRow header={advisorHeader} subheader={<p>{subAdvisorHeader}</p>}>
          <div className="biocards-holder">
            {memberData &&
            memberData[5].Advisors.map((member, index) => {
              let imageID = member.photo_id
                ? member.photo_id
                : member.name.replace(/[^A-Z0-9]/gi, '');

              return (
                <BioCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  year={member.year}
                  major={member.major}
                  portfolio_url={member.portfolio_url}
                  github_url={member.github_url}
                  linkedin_url={member.linkedin_url}
                  image_sizes={imageData[imageID].sizes}
                />
              );
            })}
          </div>
        </BioTextRow>
      </Layout>
    );
  }
}

export default compose()(Apply);
