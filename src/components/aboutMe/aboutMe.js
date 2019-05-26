import React from "react"
import styled from "styled-components"

import Skills from "./skills"
import Contact from "./contact"
import Hobby from "./hobby"
import ArrowButton from "./arrow"
import media from "../stylesComponents/media"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

const Menu = styled.div`
  z-index: 100;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`

const ArrowContainer = styled.div`
  opacity: ${props => (props.isActive ? 1 : 0.65)};
  transition: opacity 500ms;
  margin-bottom: 70px;

  ${media.lessThan("medium")`
    width: 100%;
    display: flex;
    justify-content: center;
  `}
`

export default class aboutMe extends React.Component {
  state = {
    isSkills: true,
    isContact: false,
    isHobby: false,
    isAnimationSkills: "block",
    isAnimationContact: "none",
    isAnimationHobby: "none",
    lastSlide: "isSkills",
    lastAnimation: "isAnimationSkills",
    firstRunning: true,
    changeFadeIn: false,
    blocker: true,
  }

  handleClick = (myState, animation) => {
    if (this.state.blocker) {
      if (this.state.lastSlide === myState) {
        return 0
      }
      if (this.state.firstRunning) {
        this.setState({
          firstRunning: false,
        })
      }

      this.setState({
        blocker: false,
        [myState]: true,
        [animation]: "block",
        [this.state.lastSlide]: false,
      })

      setTimeout(() => {
        this.setState(
          {
            [this.state.lastAnimation]: "none",
          },
          this.setState({
            lastSlide: myState,
            lastAnimation: animation,
          })
        )
      }, 850)

      if (this.state.lastSlide === "isHobby" || myState === "isHobby") {
        this.setState({
          changeFadeIn: true,
        })
      } else {
        this.setState({
          changeFadeIn: false,
        })
      }

      setTimeout(() => {
        this.setState({
          blocker: true,
        })
      }, 1000)
    }
  }

  render() {
    return (
      <>
        <Menu>
          <ArrowContainer isActive={this.state.isSkills}>
            <ArrowButton
              title="skills"
              onClick={() => this.handleClick("isSkills", "isAnimationSkills")}
            />
          </ArrowContainer>
          <ArrowContainer isActive={this.state.isContact}>
            <ArrowButton
              title="contact"
              onClick={() =>
                this.handleClick("isContact", "isAnimationContact")
              }
            />
          </ArrowContainer>
          <ArrowContainer isActive={this.state.isHobby}>
            <ArrowButton
              title="more about me"
              onClick={() => this.handleClick("isHobby", "isAnimationHobby")}
            />
          </ArrowContainer>
        </Menu>
        <Wrapper>
          <Skills
            extender={true}
            firstRunning={this.state.firstRunning}
            isActive={this.state.isSkills}
            display={this.state.isAnimationSkills}
          />
          <Contact
            extender={true}
            isActive={this.state.isContact}
            display={this.state.isAnimationContact}
            isHobby={this.state.changeFadeIn}
          />
          <Hobby
            extender={true}
            isActive={this.state.isHobby}
            display={this.state.isAnimationHobby}
          />
          <Skills
            firstRunning={this.state.firstRunning}
            isActive={this.state.isSkills}
            display={this.state.isAnimationSkills}
          />
          <Contact
            isActive={this.state.isContact}
            display={this.state.isAnimationContact}
            isHobby={this.state.changeFadeIn}
          />
          <Hobby
            isActive={this.state.isHobby}
            display={this.state.isAnimationHobby}
          />
        </Wrapper>
      </>
    )
  }
}
