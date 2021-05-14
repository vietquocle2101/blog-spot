import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"


const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Page</h1>
      <p>
        Hello everyone, my name is Viet and I hope you all have a wonderful
        semester at Richland College. My family had just moved from Viet Nam to
        the United States at the end of last year so everything here is new to
        me and I chose Richland College as my new starting point. Reading,
        playing music, playing video games as well as watching movies are my
        hobbies.
      </p>
      <p>
        I created this blog during my Web Development course. It will be a
        place for me to introduce and express myself. Also, this blog will help me gain experience in developing an actual website
      </p>
      <Link to="/">Go Home</Link>
    </Layout>
  )
}

export default About
