import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import TextRow from '../components/TextRow';
import LionIcon from '../assets/images/lion-simple.png';

import { Link } from 'gatsby';

class Homepage extends React.Component {
  render() {
    const siteTitle = 'We are LIONBASE';
    const subTitle = '';
    const header = '';
    const subHeader =
      'LionBase is a data product development group that aims to connect driven students interested in data science, product design, statistics, or computer science with meaningful industry applications. We work closely with companies to understand their problem and deliver data centric solutions.';

    return (
      <Layout
        title={siteTitle}
        subtitle={
          <Fragment>
            Columbia student-driven{' '}
            <span className="highlight">data solutions</span> for industry
            problems
          </Fragment>
        }
        icon={<img className="home-icon" src={LionIcon}/>}
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
          <meta
            name="google-site-verification"
            content="LIUG6pjUZ6emRZ2deb107qM_bclQ7iqgihk1tLZ4MdM"
          />
        </Helmet>

        <TextRow
          header={
            <Fragment>
              Interested in data science? Upload your resume to join our pool of candidates.
              {/*<a href="https://lionbase1.typeform.com/to/ZQXVCO"*/}
                 {/*target="_blank">*/}
                {/*<span className="highlight"></span>*/}
              {/*</a> {' '}*/}
            </Fragment>
          }
          subheader={
            <h5>
              We are developing a recruitment platform to connect companies and data science
              candidates. Join the program {' '}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvK2N5Jy9TjiNV1yRw94AvpnMLxZE_7b5yn-nqhZW4T-zkJA/viewform"
                 target="_blank">
                <span className="highlight">here</span>
              </a>.
            </h5>
          }
          className="style5"
        />

        <section id="one" className="main2 style1">
          <div className="grid-wrapper mission">
            <div className="col-6 left style4">
              {/*<span className="icon style3 major fa-user-circle-o fit"></span>*/}
              <h3>
                <span className="underline">M I S S I O N</span>
              </h3>
              <div className="body">
                <p>
                  LionBase works to foster inclusivity at the intersection of
                  data science and product development by connecting students
                  and companies through impactful data products.
                </p>
              </div>
            </div>
            <div className="col-6 right style5">
              {/*<span className="icon style3 major fa-line-chart fit"></span>*/}
              <h3>
                <span className="underline">V A L U E S</span>
              </h3>
              <div className="body">
                <ul>
                  <li>CLIENTS FIRST</li>
                  <li>INNOVATION</li>
                  <li>DIVERSITY</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TextRow
          header="Our Business. Your Goals."
          subheader={
            <h4>
              We help companies in New York City evaluate and address{' '}
              <span className="highlight">medium-sized</span> problems.
            </h4>
          }
        />
        <div id="levels">
          <div className="level top">
            <div className="header">
              <h4>STRATEGY</h4>
            </div>
            <span>Understand how data can drive your group’s success</span>
          </div>
          <div className="level middle">
            <div className="header">
              <h4>CONSULTING</h4>
            </div>
            <span>
              Get answers to your business concerns through in-depth data
              analysis
            </span>
          </div>
          <div className="level bottom">
            <div className="header">
              <h4>DEVELOPMENT</h4>
            </div>
            <span>
              Work with us to design, build, and implement exploratory data
              products and tools
            </span>
          </div>
        </div>
        <TextRow
          header={
            <Fragment>
              <a href="https://nyc.us19.list-manage.com/subscribe?u=6022933505ac842dc380ce193&id=7b5102c35c"
              target="_blank">
              <span className="highlight">Subscribe</span>
              </a> to the Sunday Byte.
            </Fragment>
          }
          subheader='Stay up to date on our progress, events, and more with our weekly newsletter.'
          className="style1"
        />
      </Layout>
    );
  }
}

export default Homepage;
