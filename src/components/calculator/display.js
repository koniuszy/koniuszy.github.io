import React from "react"
import styled from "styled-components"

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: 135px;
  height: 35px;
  margin-top: 10px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 12px;
  margin-left: 12px;
  overflow: hidden;
  white-space: noWrap;
`

const DisplayContainer = styled.div`
  max-width: 125px;
  max-height: 32px;
  text-align: left;
  font-size: 24px;
  margin-left: 9px;
`

const Display = props => {
  const display = props.display
  const displayZero = props.displayZero

  const getDisplay = () => {
    if (display.length > 0) {
      return display
    } else return displayZero
  }

  return (
    <TopContainer>
      <DisplayContainer> {getDisplay()} </DisplayContainer>
    </TopContainer>
  )
}

export default Display
