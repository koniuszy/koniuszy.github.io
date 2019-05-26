import React from "react"

import styled from "styled-components"
import BackgroundParticles from "../../components/backgroundParticle"
import Title from "./title"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "../stylesComponents/media"

export const Button = styled.button`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  opacity: 0.9;
  user-select: none;
  width: 150px;
  height: 32px;
  overflow: hidden;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`
const Link = styled(AniLink)`
  z-index: 3;
  height: 32px;

  ${media.lessThan("small")`
    order: 5
    margin-top: 20px;
  `}
`

const ButtonsContainer = styled.div`
  width: 100%;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  order: -10;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const Arrow = styled.div`
  transform: rotate(45deg);
  display: inline-block;
  width: 15px;
  height: 15px;
  border-width: 2px 2px 0 0;
  border-style: solid;
  margin-left: ${state => state.margin};
  transition: margin 150ms;
`

export const ButtonTextFront = styled.span`
  margin-left: 10px;
  letter-spacing: 3px;
`

export const ButtonTextBack = styled(ButtonTextFront)`
  margin-left: 0;
  margin-right: 10px;
`
export default class MyProjects extends React.Component {
  state = {
    home: "10px",
    me: "0",
    realty: "10px",
  }

  handleClick = name => {
    if (name === this.props.firstName) {
      this.setState({
        home: "45px",
      })
    } else if (name === this.props.thirdName) {
      this.setState({
        realty: "45px",
      })
    }
  }

  render() {
    return (
      <ButtonsContainer>
        <Link
          fade
          aria-label="home"
          style={{ textDecoration: "none" }}
          duration={0.75}
          to="/"
        >
          <Button onClick={() => this.handleClick(this.props.firstName)}>
            <ButtonTextFront>{this.props.firstName}</ButtonTextFront>
          </Button>
        </Link>

        <Title> {this.props.title} </Title>

        <Link
          style={{ textDecoration: "none" }}
          fade
          duration={0.75}
          to={this.props.to}
          aria-label="main"
        >
          <Button onClick={() => this.handleClick(this.props.secondName)}>
            <ButtonTextFront>{this.props.secondName}</ButtonTextFront>
          </Button>
        </Link>

        <BackgroundParticles />
      </ButtonsContainer>
    )
  }
}
