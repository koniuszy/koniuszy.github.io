import React from "react"
import styled, { keyframes } from "styled-components"

import { SlideContainer } from "../stylesComponents/slides"
import { fadeInRight, fadeOutRight } from "react-animations"
import Carousel from "./carousel"
import media from "../stylesComponents/media"

const fadeIn = keyframes`${fadeInRight}`
const fadeOut = keyframes`${fadeOutRight}`

const Container = styled(SlideContainer)`
  position: ${props => (props.extender ? "static" : "absolute")};
  opacity: ${props => (props.extender ? 0 : 1)};
  display: ${props => props.display};
  animation: 1s
    ${props => (props.extender ? "" : props.active ? fadeIn : fadeOut)};

  justify-content: flex-start;

  ${media.lessThan("large")`
    margin-bottom: 0;
  `}
`

const hobby = props => {
  return (
    <Container
      extender={props.extender}
      active={props.isActive}
      display={props.display}
    >
      <Carousel isActive={props.display} autoPlay={props.extender} />
    </Container>
  )
}

export default hobby
