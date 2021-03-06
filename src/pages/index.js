import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Carousel from '../components/Carousel'
import SocialNetworks from '../components/SocialNetworks'
import AboutUs from '../components/AboutUs'
import Location from '../components/Location'
import Footer from '../components/Footer'


const IndexPage = () => (
  <main>
    <NavigationHeader activeTab = "Home"/>
    <Carousel/>
    <SocialNetworks/>
    <AboutUs/>
    <Location/>
    <Footer/>
  </main>
)

export default IndexPage