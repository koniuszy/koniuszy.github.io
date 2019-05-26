import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled, { keyframes } from "styled-components"
import BackgroundParticles from "../backgroundParticle"

const opacityButton = keyframes`

  0% {
    opacity: 0;
  }

  100% {
     opacity: 0.8;
  }
  
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  display: ${state => state.displayAnimation};
  justify-content: center;
  align-items: center;
  color: white;
  width: 100px;
  height: 50px;
  background-color: black;
  border-radius: 15px;
  user-select: none;
  animation: ${opacityButton} 2s ease-in;
  cursor: pointer;
  border: none;
  padding: 0;
  margin-bottom: 30px;
  opacity: ${state => state.opacity};
  transition: opacity 750ms;
  z-index: 3;
  &:focus {
    outline: none;
  }

  &:hover {
    opacity: ${state => state.hover};
  }
`

const Link = styled(AniLink)`
  position: absolute;
  z-index: 100;
  width: 100px;
  height: 50px;
`
export default class GetButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: "0.8",
      hover: "1",
      displayAnimation: "none",
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        displayAnimation: "flex",
      })
    }, 750)
  }

  handleClick = () => {
    this.setState({
      opacity: "0",
      hover: "0",
    })
    setTimeout(() => {
      this.setState({
        displayAnimation: "none",
      })
    }, 750)
  }

  render() {
    return (
      <>
        <Container>
          <BackgroundParticles />
          <Button
            onClick={this.handleClick}
            opacity={this.state.opacity}
            hover={this.state.hover}
            displayAnimation={this.state.displayAnimation}
          >
            <p style={{ margin: 0 }}>go</p>
            <Link fade duration={0.75} to="/myProjects/" />
          </Button>
        </Container>
      </>
    )
  }
}
