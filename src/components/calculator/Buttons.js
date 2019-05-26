import React from "react"
import styled from "styled-components"

const ButtonsContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 14px;
  margin-left: 14px;
  margin-top: 5px;
  color: white;
  align-items: center;
  align-content: center;
`

// fixed
const Buttons = props => {
  return <ButtonsContainers> {props.children} </ButtonsContainers>
}
export default Buttons
