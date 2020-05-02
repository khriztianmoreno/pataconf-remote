import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import Sponsors from '../components/Sponsors'
import Speakers from '../components/Speakers'
import About from '../components/About'
import TicketPrices from '../components/TicketPrices'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Sponsors />
    <About />
    <Speakers />
    <TicketPrices />
  </Layout>
)

export default IndexPage
