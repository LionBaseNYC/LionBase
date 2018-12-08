import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'react-compose'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import { Link } from 'gatsby'
import TextRow from '../components/TextRow'
import BioTextRow from '../components/TextRow'
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
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/scss/biocard.scss'

import AileenCano from '../assets/images/member-photos/AileenCano.jpeg'
import AlexKim from '../assets/images/member-photos/AlexKim.png'
import AndrewRodriguez from '../assets/images/member-photos/AndrewRodriguez.png'
import BrandonWilliamZhang from '../assets/images/member-photos/BrandonWilliamZhang.png'
import BrennanXavierMcManus from '../assets/images/member-photos/BrennanXavierMcManus.png'
import BrianLingHo from '../assets/images/member-photos/BrianLingHo.jpg'
import CarlosEnriqueEguiluzRosas from '../assets/images/member-photos/CarlosEnriqueEguiluzRosas.png'
import CherieChu from '../assets/images/member-photos/CherieChu.png'
import DagmawiSraj from '../assets/images/member-photos/DagmawiSraj.png'
import DavidReissMello from '../assets/images/member-photos/DavidReissMello.jpeg'
import EmilyYuAnWang from '../assets/images/member-photos/EmilyYuAnWang.jpg'
import ErickaWu from '../assets/images/member-photos/ErickaWu.jpg'
import GabrielBenedict from '../assets/images/member-photos/GabrielBenedict.jpg'
import GitikaBose from '../assets/images/member-photos/GitikaBose.jpg'
import HaleySo from '../assets/images/member-photos/HaleySo.jpg'
import HarrisonBingWang from '../assets/images/member-photos/HarrisonBingWang.jpg'
import HelenJin from '../assets/images/member-photos/HelenJin.jpg'
import HeyangHuang from '../assets/images/member-photos/HeyangHuang.jpg'
import HidyYi from '../assets/images/member-photos/HidyYi.png'
import HuijuanZhang from '../assets/images/member-photos/HuijuanZhang.jpg'
import HuiLu from '../assets/images/member-photos/HuiLu.jpg'
import IanLoeb from '../assets/images/member-photos/IanLoeb.png'
import IbrahimNawazKhan from '../assets/images/member-photos/IbrahimNawazKhan.jpg'
import IreneNam from '../assets/images/member-photos/IreneNam.jpg'
import IvanaMoore from '../assets/images/member-photos/IvanaMoore.jpg'
import JoonKyun from '../assets/images/member-photos/JoonKyun.png'
import KatrinaFrancis from '../assets/images/member-photos/KatrinaFrancis.png'
import KevinLe from '../assets/images/member-photos/KevinLe.jpg'
import KiCooleyWinters from '../assets/images/member-photos/KiCooleyWinters.jpg'
import MingxuanTeng from '../assets/images/member-photos/MingxuanTeng.jpg'
import MiriamLinz from '../assets/images/member-photos/MiriamLinz.jpeg'
import MorganKang from '../assets/images/member-photos/MorganKang.png'
import NelsonLin from '../assets/images/member-photos/NelsonLin.png'
import NitashaNair from '../assets/images/member-photos/NitashaNair.jpg'
import OngunUzayMacar from '../assets/images/member-photos/OngunUzayMacar.jpg'
import PatrickIanLewis from '../assets/images/member-photos/PatrickIanLewis.jpg'
import PeranutNimitsurachat from '../assets/images/member-photos/PeranutNimitsurachat.png'
import PierreRodgers from '../assets/images/member-photos/PierreRodgers.png'
import PranavShrestha from '../assets/images/member-photos/PranavShrestha.jpg'
import RaghavMecheri from '../assets/images/member-photos/RaghavMecheri.jpg'
import SharonJin from '../assets/images/member-photos/SharonJin.png'
import SianLeeKitt from '../assets/images/member-photos/SianLeeKitt.jpg'
import SohbetDovranov from '../assets/images/member-photos/SohbetDovranov.jpg'
import TejitPabari from '../assets/images/member-photos/TejitPabari.jpg'
import TheBaoNgo from '../assets/images/member-photos/TheBaoNgo.jpg'
import TommyPolanco from '../assets/images/member-photos/TommyPolanco.png'
import WilliamJiaChengZheng from '../assets/images/member-photos/WilliamJiaChengZheng.jpg'
import WilliamLingxiaoTong from '../assets/images/member-photos/WilliamLingxiaoTong.jpg'
import XinchenZhai from '../assets/images/member-photos/XinchenZhai.jpg'
import ZacharyGeddes from '../assets/images/member-photos/ZacharyGeddes.png'

// import {images} from '../assets/helpers/image-import';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import BioCard from '../components/BioCard'

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
              linkedin_url
              github_url
              portfolio_url
            }
            Team_Lead {
              name
              position
              year
              linkedin_url
              github_url
              portfolio_url
            }
            Client {
              name
              position
              year
              linkedin_url
              github_url
              portfolio_url            
            }
            Research {
              name
              position
              year
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
`

class Apply extends Component {

  static propTypes = {}

  state = {
    imageData: null,
    memberData: null,
  }

  componentDidMount() {
    this.setState({
      memberData: this.props.data.members.edges[0].node,
      imageData: this.props.data.headshots.edges.map(e => e.node),
    })
  }

  render() {
    // console.log(images);
    const
      siteTitle = 'About Us',
      subTitle = 'Learn more about who we are and what we do',
      header = 'Our Core Values',
      subHeader = 'LionBase is a data product development group that aims to connect driven students interested in data science, product design, statistics, or computer science with meaningful industry applications.',
      structHeader = 'Our Team Structure',
      subStructHeader = 'We have three primary groups: client teams, research teams, and the executive team',
      execHeader = 'Executive Team',
      subExecHeader = 'Meet the organizers of LionBase',
      leadHeader = 'Team Leads',
      subLeadHeader = 'Meet the client-facing project leads',
      teamHeader = 'Client Team Members',
      subTeamHeader = 'Meet the people who build our products alongside the team leads',
      researchHeader = 'Research Team Members',
      subResearchHeader = 'Meet the people expanding our understanding of data science'

    const {memberData, imageData} = this.state;

    console.log(memberData)
    console.log(imageData)

    return (
      <Layout
        title={siteTitle}
        subtitle={subTitle}
      >
        <Helmet title={siteTitle}/>

        {/* KEV TODO */}
        {/* <BioCard name={} title={} major={} portfolio_url={}/> */}


        <TextRow header={header} subheader={subHeader}>
          <div className="grid-wrapper">
            <div className="col-4">
              <FontAwesomeIcon icon={faUserCircle} className="icon style7 major naked"/>
              {/*<span className="icon style3 major fa-user-circle-o fit"></span>*/}
              <h3>Clients First</h3>
              <p>Build relationships together and place our clients at the center of our work</p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon icon={faPaintBrush} className="icon style8 major naked"/>
              {/*<span className="icon style3 major fa-line-chart fit"></span>*/}
              <h3>Innovation</h3>
              <p>Approach problems from creative perspectives</p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon icon={faShapes} className="icon style9 major naked"/>
              {/*<span className="icon style3 major fa-line-chart fit"></span>*/}
              <h3>Diversity</h3>
              <p>Build diverse teams that value equity, inclusion, and dignity for all</p>
            </div>
          </div>

        </TextRow>

        <TextRow header={structHeader} subheader={subStructHeader}>
          <div className="grid-wrapper">
            <div className="col-4">
              <FontAwesomeIcon icon={faUsers} className="icon style7 major naked"/>
              {/*<span className="icon style3 major fa-user-circle-o fit"></span>*/}
              <h3>Client Teams</h3>
              <p>Each client team consists of 6-8 students with significant experience in data science or product
                development.
              </p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon icon={faMicroscope} className="icon style8 major naked"/>
              {/*<span className="icon style3 major fa-line-chart fit"></span>*/}
              <h3>Research Teams</h3>
              <p>Our research teams perform regular exploration of various data science fields to improve our work
                internally.</p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon icon={faBriefcase} className="icon style9 major naked"/>
              {/*<span className="icon style3 major fa-line-chart fit"></span>*/}
              <h3>Executive Team</h3>
              <p>The executive team supports the client and research teams through business and operations.</p>
            </div>
          </div>

        </TextRow>

        <BioTextRow header={execHeader} subheader={subExecHeader}>

          <div className="grid-wrapper">
            {/*<div className="col-4">*/}
              {/*<BioCard name={'Kevin Le'} title={'Executive'} major={'Operations Research'}*/}
                       {/*linkedin_url={'https://www.linkedin.com/in/kevin-le1/'}/>*/}

            {/*</div>*/}

          </div>

        </BioTextRow>


        <BioTextRow header={leadHeader} subheader={subLeadHeader}>

        </BioTextRow>

        <BioTextRow header={teamHeader} subheader={subTeamHeader}>

        </BioTextRow>

        <BioTextRow header={researchHeader} subheader={subResearchHeader}>


        </BioTextRow>

      </Layout>
    )
  }
}

export default compose(
)(Apply)