import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome!</h1>
    <h2>My name is Viet and this is my blog created during my class</h2>
    <p>You can learn about me by <Link to="/about">Click Here!</Link></p>
  </Layout>
)

export default IndexPage
