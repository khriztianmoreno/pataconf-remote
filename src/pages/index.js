import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import Sponsors from '../components/Sponsors'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Sponsors />
  </Layout>
)

export default IndexPage
