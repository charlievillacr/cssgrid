import React from 'react'
import Link from 'gatsby-link'
import PageTitle from '../components/PageTitle'
import MainContent from '../components/MainContent'
import MastHead from '../components/MastHead'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'


const IndexPage = () => (
  <div className="SiteContainer">
      <PageTitle/>
      <MainContent/>
      <MastHead/>
      <SideBar/>
      <Footer/>
      <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage