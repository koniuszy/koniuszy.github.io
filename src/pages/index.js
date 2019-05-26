import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import Header from "../components/index/header"
import Explore from "../components/index/explore"
import Button from "../components/index/button"
import MainContainer from "../components/stylesComponents/container"

const Container = styled(MainContainer)`
  align-content: space-between;
`

const IndexPage = () => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  // Then we set the value in the --vh custom property to the root of the document

  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    // document.getElementsByClassName("lds-dual-ring").style.display = "none"
  }, [])

  return (
    <Layout>
      <SEO
        title="Explore"
        keywords={[`developer`, `CV`, `Oslo`, "Michal", "Konczak"]}
      />
      <Container>
        <Header />
        <Button />
        <Explore />
      </Container>
    </Layout>
  )
}

export default IndexPage
