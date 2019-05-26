import React from "react"
import Particles from "react-particles-js"

import "./layout.css"
import styled from "styled-components"
import ParticleSett from "./particlesSettings"

const Background = styled(Particles)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  z-index: 2;
`

const BackgroundParticles = () => {
  return (
    <>
      <Background params={ParticleSett} />
    </>
  )
}

export default BackgroundParticles
