import React, { useState } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Fade } from "react-slideshow-image"
import "./carousel.css"
import Video from "./video"
import media from "../stylesComponents/media"

const Picture = styled(Img)`
  width: 500px;
  overflow: hidden;
  z-index: 10;
  border-radius: 4px;
  display: flex;
  align-content: center;

  ${media.lessThan("small")`
    width: 50%;
    margin-left: 10px;
  `}
`
const Norway = styled(Picture)`
  width: 400px;
`
const CarouselContainer = styled.div`
  margin: 0 20px;
  width: 500px;
  overflow: hidden;
  position: relative;
`

const getPicture = picture => (
  <StaticQuery
    query={graphql`
      query {
        maroko: file(relativePath: { eq: "maroko.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        maroko1: file(relativePath: { eq: "maroko1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        norway: file(relativePath: { eq: "norway.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stavanger: file(relativePath: { eq: "stavanger.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        akerBrygge: file(relativePath: { eq: "akerBrygge.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={picture}
  />
)

const fadeProperties = {
  duration: 6000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  autoplay: true,
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
`

const getPictures = data => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <Picture alt="maroko1" fluid={data.maroko1.childImageSharp.fluid} />
        </div>
      </div>

      <div className="each-fade">
        <div className="image-container">
          <Picture
            alt="stavanger"
            fluid={data.stavanger.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="each-fade">
        <div className="image-container">
          <Norway alt="norway" fluid={data.norway.childImageSharp.fluid} />
        </div>
      </div>

      <div className="each-fade">
        <div className="image-container">
          <Picture alt="maroko" fluid={data.maroko.childImageSharp.fluid} />
        </div>
      </div>

      <div className="each-fade">
        <div className="image-container">
          <Picture
            alt="akerBrygge"
            fluid={data.akerBrygge.childImageSharp.fluid}
          />
        </div>
      </div>
    </Fade>
  )
}

const ProgressBars = styled.div`
  width: 25%;

  ${media.lessThan("xLarge")`
    width: 70%;
    margin-top: 30px;
  `}
`

const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  border: 2px #000 solid;
  border-radius: 20px;
  margin-bottom: 70px;
`
const Fill = styled.div`
  width: ${props => props.width};
  height: 100%;
  border-radius: 20px;
  background-color: #000;
  opacity: 0.9;
  transition: width 2s ease-out;
`

const carousel = props => {
  const [crane, setCrane] = useState(0)
  const [songs, setSongs] = useState(0)
  const [grammar, setGrammar] = useState(0)

  if (props.isActive === "block") {
    setTimeout(() => {
      setCrane("80%")
      setSongs("90%")
      setGrammar("20%")
    }, 1500)
  }

  return (
    <Container>
      <CarouselContainer>{getPicture(getPictures)}</CarouselContainer>
      <ProgressBars>
        <h3>Crane operating skills</h3>
        <ProgressBar>
          <Fill width={crane} />
        </ProgressBar>
        <h3>Spanish (songs)</h3>
        <ProgressBar>
          <Fill width={songs} />
        </ProgressBar>
        <h3>Spanish (grammar)</h3>
        <ProgressBar>
          <Fill width={grammar} />
        </ProgressBar>
      </ProgressBars>
      <Video videoSrcURL={props.autoPlay} videoTitle="Dance" />
    </Container>
  )
}

export default carousel
