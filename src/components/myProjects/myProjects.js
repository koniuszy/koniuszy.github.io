import React from "react"

import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Flippy, { FrontSide, BackSide } from "react-flippy"

import logoGlacial from "../../images/logo.svg"
import Calculator from "../calculator/App"
import Books from "../books/App"
import media from "../stylesComponents/media"
import {
  Button,
  Arrow,
  ButtonTextFront,
  ButtonTextBack,
} from "../stylesComponents/buttons"

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 60px;

  ${media.lessThan("large")`
    margin-top: 0;
  `}
`

const CardContainer = styled.div`
  z-index: 5;
  margin: 50px;
`
const GlacialContainer = styled(CardContainer)`
  ${media.lessThan("xLarge")`
    order: 1;
  `}

  ${media.greaterThan("xLarge")`
    order: 0;
  `}
`

const Front = styled(FrontSide)`
  padding: 0 !important;
  box-shadow: none !important;
`
const Back = styled(BackSide)`
  padding: 0 !important;
  box-shadow: none !important;
`

const FrontSideCard = styled.div`
  color: black;
  border-radius: 3px;
  width: 300px;
  height: 450px;
  background-color: transparent;
  opacity: 1;
  z-index: 100;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
`

const BackSideCard = styled(FrontSideCard)`
  background-color: black;
  align-content: space-between;
`

const SuperFrontSide = styled(FrontSideCard)`
  width: 500px;
  height: 450px;

  ${media.lessThan("large")`
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  `}
`

const SuperBackSide = styled(BackSideCard)`
  width: 500px;
  height: 450px;

  ${media.lessThan("large")`
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  `}
`

const Picture = styled(Img)`
  margin-top: 10px;
  width: 250px;
  border-radius: 5px;
  cursor: pointer;
`

const FrontButton = styled(Button)`
  margin-bottom: 30px;
`

const BackButton = styled(FrontButton)`
  justify-content: flex-end;
  background-color: black;
  color: white;
`

const ArrowBack = styled(Arrow)`
  margin-left: 0;
  margin-right: ${state => state.margin};
  transform: rotate(-135deg);
`

const TextBack = styled.span`
  margin-top: 20px;
  letter-spacing: 2px;
  margin-bottom: 0;
  width: 100%;
  color: white;
  width: 90%;
  line-height: 24px;
`

const TextFront = styled(TextBack)`
  margin-top: 0;
  color: black;
`

const ExternalA = styled.a`
  color: white;
`

const GlacialLogo = styled.img`
  width: 100px;
`
const LogoOnPicture = styled.img`
  width: 75px;
  position: absolute;

  ${media.lessThan("small")`
    width: 40px;
  `}
`

const PictureGlacial = styled(Picture)`
  width: 500px;
  margin: 0;
`

const GlacialWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${media.lessThan("small")`
    width: 300px;
  `}
`

const getPicture = picture => (
  <StaticQuery
    query={graphql`
      query {
        glacial: file(relativePath: { eq: "banner.png" }) {
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

export default class MyProjects extends React.Component {
  state = {
    API: false,
    Glacial: false,
    Calculator: false,
    marginFirst: "10px",
    marginSecond: "0",
    GlacialMarginFront: "10px",
    GlacialMarginBack: "0",
    marginThird: "10px",
    marginFourth: "0",
  }

  getPictureGlacial = data => {
    return (
      <a
        aria-label="GSAS"
        rel="noopener noreferrer"
        target="_blank"
        href="https://glacialscript.com"
      >
        <GlacialWrapper>
          <PictureGlacial
            alt="glacial"
            fluid={data.glacial.childImageSharp.fluid}
          />
          <LogoOnPicture alt="logo" src={logoGlacial} />
        </GlacialWrapper>
      </a>
    )
  }

  handleClick = (number, e, secNumber) => {
    e.preventDefault()
    let marginFront
    let marginBack

    if (secNumber === 1) {
      marginFront = "45px"
      marginBack = "10px"
    } else if (secNumber === 2) {
      marginFront = "10px"
      marginBack = "45px"
    }

    if (number === 1) {
      this.setState(prevState => ({
        API: !prevState.API,
        marginFirst: marginFront,
        marginSecond: marginBack,
      }))
    } else if (number === 2) {
      this.setState(prevState => ({
        Glacial: !prevState.Glacial,
        GlacialMarginFront: marginFront,
        GlacialMarginBack: marginBack,
      }))
    } else if (number === 3) {
      this.setState(prevState => ({
        Calculator: !prevState.Calculator,
        marginThird: marginFront,
        marginFourth: marginBack,
      }))
    }
  }

  render() {
    return (
      <Container>
        <CardContainer>
          <Flippy
            flipOnClick={false}
            isFlipped={this.state.API}
            flipDirection="horizontal"
          >
            <Front>
              <FrontSideCard>
                <Books />
                <FrontButton onClick={e => this.handleClick(1, e, 1)}>
                  <ButtonTextFront>about </ButtonTextFront>
                  <Arrow margin={this.state.marginFirst} />
                </FrontButton>
              </FrontSideCard>
            </Front>
            <Back>
              <BackSideCard>
                <TextBack>
                  <h4>May 2019</h4>
                  <br />
                  <p>
                    Type the title of a book to search Google's{" "}
                    <ExternalA
                      aria-label="API"
                      href="https://developers.google.com/books/docs/v1/using#WorkingVolumes"
                    >
                      database
                    </ExternalA>
                    .
                  </p>
                  <p>
                    Recruitment task for{" "}
                    <ExternalA aria-label="STXNEXT" href="https://stxnext.com/">
                      STXNEXT
                    </ExternalA>{" "}
                    company as a part of my practice.
                  </p>
                  <p>
                    Through this{" "}
                    <ExternalA
                      aria-label="Github"
                      href="https://github.com/koniuszy/Api-stx"
                    >
                      exercise
                    </ExternalA>{" "}
                    I have developed fetching skills.
                  </p>
                </TextBack>
                <BackButton onClick={e => this.handleClick(1, e, 2)}>
                  <ArrowBack margin={this.state.marginSecond} />
                  <ButtonTextBack>back</ButtonTextBack>
                </BackButton>
              </BackSideCard>
            </Back>
          </Flippy>
        </CardContainer>

        <GlacialContainer>
          <Flippy
            flipOnClick={false}
            isFlipped={this.state.Glacial}
            flipDirection="horizontal"
          >
            <Front>
              <SuperFrontSide>
                {getPicture(this.getPictureGlacial)}
                <TextFront>Glacial Script AS </TextFront>
                <FrontButton onClick={e => this.handleClick(2, e, 1)}>
                  <ButtonTextFront>about </ButtonTextFront>
                  <Arrow margin={this.state.GlacialMarginFront} />
                </FrontButton>
              </SuperFrontSide>
            </Front>
            <Back>
              <SuperBackSide key="back">
                <TextBack>
                  <h4>April 2019</h4>
                  <ExternalA
                    aria-label="React"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://reactjs.org"
                  >
                    React
                  </ExternalA>
                  &
                  <ExternalA
                    aria-label="Gatsbsy"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.gatsbyjs.org"
                  >
                    Gatsby
                  </ExternalA>
                  <br />
                  <br />
                  A company's website <br /> for my first <br /> entrepreneurial
                  attempt.
                  <br />
                  <br />
                  <GlacialLogo alt="logo" src={logoGlacial} />
                </TextBack>
                <BackButton onClick={e => this.handleClick(2, e, 2)}>
                  <ArrowBack margin={this.state.GlacialMarginBack} />
                  <ButtonTextBack>back</ButtonTextBack>
                </BackButton>
              </SuperBackSide>
            </Back>
          </Flippy>
        </GlacialContainer>

        <CardContainer>
          <Flippy
            flipDirection="horizontal"
            flipOnClick={false}
            isFlipped={this.state.Calculator}
          >
            <Front>
              <FrontSideCard>
                <Calculator />
                <TextFront>Mini calculator</TextFront>
                <FrontButton onClick={e => this.handleClick(3, e, 1)}>
                  <ButtonTextFront>about </ButtonTextFront>
                  <Arrow margin={this.state.marginThird} />
                </FrontButton>
              </FrontSideCard>
            </Front>
            <Back>
              <BackSideCard>
                <TextBack>
                  <h4>February 2019</h4> <br />
                  My first app in React. <br /> <br /> <br /> A challenge to
                  create <br /> an app that looks <br />
                  and works exactly <br />
                  as the given model.
                </TextBack>
                <BackButton onClick={e => this.handleClick(3, e, 2)}>
                  <ArrowBack margin={this.state.marginFourth} />
                  <ButtonTextBack>back </ButtonTextBack>
                </BackButton>
              </BackSideCard>
            </Back>
          </Flippy>
        </CardContainer>
      </Container>
    )
  }
}
