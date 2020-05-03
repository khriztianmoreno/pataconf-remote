import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import Sponsors from '../components/Sponsors'
import Speakers from '../components/Speakers'
import About from '../components/About'
import TicketPrices from '../components/TicketPrices'
import CounterHome from '../components/CounterHome'
import Gallery from '../components/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Sponsors />
    <About />
    <CounterHome />
    <Speakers />
    <TicketPrices />
    <Gallery />
  </Layout>
)

export default IndexPage
