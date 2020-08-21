import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainLanding from "../components/mainLanding/MainLanding"

const IndexPage = () => (
  <Layout full>
    <SEO title="Home" />
    <MainLanding />
  </Layout>
)

export default IndexPage