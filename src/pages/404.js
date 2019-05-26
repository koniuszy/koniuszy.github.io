import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/stylesComponents/title"
import Container from "../components/stylesComponents/container"
import Buttons from "../components/stylesComponents/buttons"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Title>NOT FOUND</Title>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Buttons
        firstName="home"
        secondName="projects"
        thirdName="realty"
        to="/myProjects/"
      />
    </Container>
  </Layout>
)

export default NotFoundPage
