import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MyProjects from "../components/myProjects/myProjects"
import Buttons from "../components/stylesComponents/buttons"
import Container from "../components/stylesComponents/container"

const SecondPage = () => (
  <Layout>
    <SEO title="My Projects" />
    <Container>
      <Buttons
        firstName="home"
        secondName="about me"
        title="My projects"
        to="/aboutMe/"
      />
      <MyProjects />
    </Container>
  </Layout>
)

export default SecondPage
