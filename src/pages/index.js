import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import About from '../components/About'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
