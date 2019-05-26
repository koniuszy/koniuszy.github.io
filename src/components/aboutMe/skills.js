import React from "react"
import styled, { keyframes } from "styled-components"
import logo from "../../images/react.svg"
import redux from "../../images/redux.svg"
import gatsby from "../../images/gatsby-icon.svg"
import htmlCss from "../../images/HtmlCss.svg"
import Bootstrap from "../../images/Bootstrap.svg"
import JavaScript from "../../images/Js.svg"
import Sass from "../../images/Sass.svg"
import { SlideContainer } from "../stylesComponents/slides"
import {
  zoomInDown,
  fadeInLeft,
  fadeOutLeft,
  jello,
  wobble,
  rubberBand,
  bounce,
  flip,
} from "react-animations"
import media from "../../components/stylesComponents/media"

const FadeUp = keyframes`${zoomInDown}`
const FadeIn = keyframes`${fadeInLeft}`
const FadeOut = keyframes`${fadeOutLeft}`
const jelloLogo = keyframes`${jello}`
const wobbleLogo = keyframes`${wobble}`
const rubberLogo = keyframes`${rubberBand}`
const bounceLogo = keyframes`${bounce}`
const flipLogo = keyframes`${flip}`

const ContainerAnimation = styled(SlideContainer)`
  opacity: ${props => (props.extender ? 0 : 1)};
  animation: 1s
    ${props => {
      if (props.extender) {
        return ""
      } else if (props.firstRunning) {
        return FadeUp
      } else if (props.active) {
        return FadeIn
      } else return FadeOut
    }};
  display: ${props => props.display};
  position: ${props => (props.extender ? "static" : "absolute")};
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const ReactLogo = styled.img`
  width: 150px;
  margin: 10px 0;
  z-index: 50;
  :hover {
    animation: ${spin} infinite 5s linear;
  }
`

const GatsbyImg = styled.img`
  width: 80px;
  margin: 10px 50px;
  z-index: 50;
  :hover {
    animation: 500ms ${jelloLogo} linear;
  }
`

const ReduxLogo = styled.img`
  width: 100px;
  margin: 10px 50px;
  z-index: 50;
  :hover {
    animation: ${wobbleLogo} infinite 2s linear;
  }
`

const HtmlCss = styled.img`
  width: 120px;
  margin: 10px 10px 10px 50px;

  ${media.lessThan("small")`
    margin: 10px 10px 10px 20px;
  `}
`

const JavaScriptLogo = styled.img`
  width: 57px;
  margin: 10px 20px 10px 0px;
`

const BootstrapLogo = styled.img`
  width: 85px;
  margin: 10px 50px;
  z-index: 50;
  :hover {
    animation: ${bounceLogo} 1s linear;
  }
`

const SassLogo = styled.img`
  width: 100px;
  margin: 10px 30px 10px 50px;
  z-index: 50;
  :hover {
    animation: 1s ${flipLogo} linear;
  }
`

const Description = styled.div`
  width: 50%;
  text-align: justify;
  margin: 50px;
  line-height: 40px;

  ${media.lessThan("large")`
    width: 80%;
    margin: 50px 0 0 0;
  `}
`
const Motto = styled(Description)`
  width: 30%;
  display: flex;
  align-items: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-content: center;
`

const ThreePillars = styled.div`
  display: block;
  flex-wrap: wrap;
  align-items: center;
  z-index: 50;
  :hover {
    animation: ${rubberLogo} 1s linear;
  }
`

const skills = props => {
  return (
    <ContainerAnimation
      firstRunning={props.firstRunning}
      active={props.isActive}
      display={props.display}
      extender={props.extender}
    >
      <Logos>
        <ReactLogo alt="logo" src={logo} />
        <GatsbyImg alt="logo" src={gatsby} />
        <ReduxLogo alt="logo" src={redux} />
        <BootstrapLogo alt="logo" src={Bootstrap} />
        <SassLogo alt="logo" src={Sass} />
        <ThreePillars>
          <HtmlCss alt="logo" src={htmlCss} />
          <JavaScriptLogo alt="logo" src={JavaScript} />
        </ThreePillars>
      </Logos>
      <TextWrapper>
        <Description>
          <h3>It all began in October 2018.</h3>
          <p>
            I was sitting on a crane 60 meters above the ground with my laptop
            waiting for the orders. They didn't seem to be coming so pretty much
            out of boredom, I started the biggest adventure of my life.
          </p>
          <p>
            Above you can see the collection of my trophies. At some point, I
            figured out that if I got to be paid for doing what I already love I
            would basically win my life.
          </p>
        </Description>
        <Motto>
          <h2
            style={{
              lineHeight: "50px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            And here I am, <br /> looking for a job as a front-end developer.
          </h2>
        </Motto>
      </TextWrapper>
    </ContainerAnimation>
  )
}

export default skills
