import React, { Component } from "react"
import styled from "styled-components"

const ButtonContainer = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  margin-bottom: 13px;
  background-color: ${state => state.color};
  transition: background-color 1s;
  padding: 1px;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  &:hover {
    box-shadow: 0px 0px 2px 5px rgba(255, 255, 255, 0.75);
  }
`

class Button extends Component {
  state = {
    color: this.Color,
  }

  Color = "#a91548"
  DarkColor = "#660c2b"
  time

  componentDidMount() {
    this.setState({
      color: this.Color,
    })
    this.changeColor()
  }

  componentWillUnmount() {
    clearTimeout(this.time)
  }

  changeColor = () => {
    this.time = setTimeout(() => {
      this.getDarker()
      this.changeColor()
    }, 5000)
  }

  getDarker = () => {
    this.setState({
      color: this.DarkColor,
    })
    setTimeout(this.getLighter, 450)
  }

  getLighter = () => {
    this.setState({
      color: this.Color,
    })
  }

  handleClick = e => {
    this.props.onClick(e)
    this.getDarker()
  }

  render() {
    return (
      <ButtonContainer
        onClick={this.handleClick}
        data-value={this.props.value}
        color={this.state.color}
      >
        <>{this.props.value}</>
      </ButtonContainer>
    )
  }
}

export default Button
