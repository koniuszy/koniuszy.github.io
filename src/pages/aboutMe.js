import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Buttons from "../components/stylesComponents/buttons"
import Container from "../components/stylesComponents/container"
import Content from "../components/aboutMe/aboutMe"

export default class aboutMe extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Explore"
          keywords={[`developer`, `CV`, `Oslo`, "Michal", "Konczak"]}
        />
        <Container>
          <Buttons
            firstName="home"
            secondName="projects"
            title="About me"
            to="/myProjects/"
          />
          <Content />
        </Container>
      </Layout>
    )
  }
}
