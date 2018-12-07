import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'react-compose'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import { Link } from 'gatsby'
import TextRow from '../components/TextRow'
import { faUserCircle, faHandshake, faChartLine, faPaintBrush, faPeopleCarry, faShapes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

import BioCard from "../components/BioCard"




class Apply extends Component {

  static propTypes = {}

  state = {}

  render() {
    const siteTitle = 'About Us'
    const subTitle = 'Learn more about who we are and what we do'
    const header = 'Our Core Values'
    const subHeader = 'LionBase is a data product development group that aims to connect driven students interested in data science, product design, statistics, or computer science with meaningful industry applications.'
    const teamHeader = 'Our Team'
    const subTeamHeader = 'Meet the people behind LionBase'
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

        <TextRow header={teamHeader} subheader = {subTeamHeader}>
        <div className="grid-wrapper">
          <div className="col-3">
            <BioCard  name={'Kevin Le'} title = {'Executive'} major={'Operations Research'} 
                      linkedin_url={'https://www.linkedin.com/in/kevin-le1/'} image_src ={KevinLe}/>

          </div>

          <div className="col-3">
            <BioCard  name={'Tommy Polanco'} title = {'Executive'} major={'Applied Math'} 
                      linkedin_url={'https://www.linkedin.com/in/tommy-polanco/'}
                      image_src ={TommyPolanco}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Morgan Kang'} title = {'Executive'} major={'History & Business'} 
                      linkedin_url={'https://www.linkedin.com/in/morgankang/'}
                      image_src ={MorganKang}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Andrew Rodriguez'} title = {'Executive'} major={'Biology & Business'} 
                      linkedin_url={'https://www.linkedin.com/in/andrew-rodriguez-001981149/'}
                      image_src ={AndrewRodriguez}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Alex Kim'} title = {'Executive'} major={'Biomedical Engineering & Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/alex-g-kim/'}
                      image_src ={AlexKim}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Katrina Francis'} title = {'Team Lead'} major={'Operations Research'} 
                      portfolio_url={'http://www.columbia.edu/~klf2133/'}
                      image_src ={KatrinaFrancis}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Nelson Lin'} title = {'Team Lead'} major={'Mechanical Engineering'} 
                      portfolio_url={'http://www.nelsonlinvents.com'}
                      image_src ={NelsonLin}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Patrick Lewis'} title = {'Team Lead'} major={'Data Science'} 
                      linkedin_url={'https://www.linkedin.com/in/patrick-ian-lewis/'}
                      image_src ={PatrickIanLewis}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'David Reiss-Mello'} title = {'Team Lead'} major={'Operations Research'} 
                      linkedin_url={'https://www.linkedin.com/in/davidreissmello'}
                      image_src ={DavidReissMello}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Carlos Enrique Eguiluz Rosas'} title = {'Associate Lead'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/ceguiluzrosas/'}
                      image_src ={CarlosEnriqueEguiluzRosas}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'William Zheng'} title = {'Associate Lead'} major={'Applied Math'} 
                      linkedin_url={'https://www.linkedin.com/in/william-j-zheng/'}
                      image_src ={WilliamJiaChengZheng}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Sian Lee Kitt'} title = {'Associate Lead'} major={'Computer Science & Applied Math'} 
                      portfolio_url={'http://sianlee.ml'}
                      image_src ={SianLeeKitt}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Emily Wang'} title = {'Associate Lead'} major={'Operations Research'} 
                      linkedin_url={'https://www.linkedin.com/in/ewang19/'}
                      image_src ={EmilyYuAnWang}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Huijuan Zhang'} title = {'Client Team'} major={'Biostatistics'} 
                      linkedin_url={'https://www.linkedin.com/in/huijuanzhang/'}
                      image_src ={HuijuanZhang}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Joon Kyun'} title = {'Client Team'} major={'Math & Statistics'} 
                      linkedin_url={'https://www.linkedin.com/in/joon-kyun-666211174/'}
                      image_src ={JoonKyun}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Ivana Moore'} title = {'Client Team'} major={'Poli Sci & Statistics'} 
                      linkedin_url={'https://www.linkedin.com/in/ivana-moore-74a2a4148/'}
                      image_src ={IvanaMoore}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Pranav Shrestha'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/shresthapranav/'}
                      image_src ={PranavShrestha}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Hidy Yi'} title = {'Client Team'} major={'Applied Math'} 
                      linkedin_url={'https://www.linkedin.com/in/hidy-yi-711ba7132/'}
                      image_src ={HidyYi}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Raghav Mecheri'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/raghavmecheri/'}
                      image_src ={RaghavMecheri}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'The Ngo'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/thengo/'}
                      image_src ={TheBaoNgo}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Frank Zhai'} title = {'Client Team'} major={'Operations Research'} 
                      linkedin_url={'https://www.linkedin.com/in/xinchen-zhai/'}
                      image_src ={XinchenZhai}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Irene Nam'} title = {'Client Team'} major={'Operations Research'} 
                      linkedin_url={'https://www.linkedin.com/in/ireneynam/'}
                      image_src ={IreneNam}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Ericka Wu'} title = {'Client Team'} major={'Data Science'} 
                      linkedin_url={'https://www.linkedin.com/in/ericka-wu-450549158/'}
                      image_src ={ErickaWu}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Dagmawi Sraj'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/dagmawi-sraj-946039154/'}
                      image_src ={DagmawiSraj}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Helen Jin'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/jin-helen/'}
                      image_src ={HelenJin}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Harrison Wang'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'linkedin.com/in/harrisonwang12'}
                      image_src ={HarrisonBingWang}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Mingxuan Teng'} title = {'Client Team'} major={'Acturial Science'} 
                      linkedin_url={'www.linkedin.com/in/mingxuanteng'}
                      image_src ={MingxuanTeng}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Ongun Uzay Macar'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/uzaymacar/'}
                      image_src ={OngunUzayMacar}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Abby Lu'} title = {'Client Team'} major={'Computer Science'} 
                      image_src ={HuiLu}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Gitika Bose'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/gitikabose/'}
                      image_src ={GitikaBose}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Heyang Huang'} title = {'Client Team'} major={'Financial Engineering'} 
                      linkedin_url={'www.linkedin.com/in/heyang-huang-0176bb155'}
                      image_src ={HeyangHuang}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Cherie Chu'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/cherie-chu'}
                      image_src ={CherieChu}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Peranut Nimitsurachat'} title = {'Client Team'} major={'Econ-Statistics & Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/phee-nimitsurachat/'}
                      image_src ={PeranutNimitsurachat}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Brian Ho'} title = {'Client Team'} major={'Math & Statistics'} 
                      linkedin_url={'https://www.linkedin.com/in/brian-ho-15bb61168'}
                      image_src ={BrianLingHo}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Pierre Rodgers'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'www.linkedin.com/in/pierre-rodgers'}
                      image_src ={PierreRodgers}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'William Tong'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/william-tong-693632133/'}
                      image_src ={WilliamLingxiaoTong}/>
                      
          </div>

          <div className="col-3">
            <BioCard  name={'Sharon Jin'} title = {'Client Team'} major={'Computer Science'} 
                      linkedin_url={'https://www.linkedin.com/in/sharon-jin-728b55152/'}
                      image_src ={SharonJin}/>
                      
          </div>

        </div>
        </TextRow>

      </Layout>
    )
  }
}

export default compose(
)(Apply)