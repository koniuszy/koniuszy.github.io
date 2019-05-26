import React from "react"
import styled, { keyframes } from "styled-components"
import { SlideContainer } from "../stylesComponents/slides"
import {
  fadeInRight,
  fadeInLeft,
  fadeOutRight,
  fadeOutLeft,
} from "react-animations"
import Map from "./map"
import Icons from "./icons"

const fadeInRightSide = keyframes`${fadeInRight}`
const fadeInLeftSide = keyframes`${fadeInLeft}`
const fadeOutRightSide = keyframes`${fadeOutRight}`
const fadeOutLeftSide = keyframes`${fadeOutLeft}`

const Container = styled(SlideContainer)`
  z-index: 100;
  position: ${props => (props.extender ? "static" : "absolute")};
  opacity: ${props => (props.extender ? 0 : 1)};
  display: ${props => props.display};
  animation: 1s
    ${props => {
      if (props.extender) {
        return ""
      } else if (props.active) {
        if (props.isHobby) {
          return fadeInLeftSide
        } else {
          return fadeInRightSide
        }
      } else if (props.isHobby) {
        return fadeOutLeftSide
      } else {
        return fadeOutRightSide
      }
    }};
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const contact = props => {
  return (
    <Container
      extender={props.extender}
      active={props.isActive}
      display={props.display}
      isHobby={props.isHobby}
    >
      <Wrapper>
        <Icons />
      </Wrapper>
      <Map />
    </Container>
  )
}

export default contact
