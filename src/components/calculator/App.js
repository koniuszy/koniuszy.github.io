import React, { Component } from "react"
import styled from "styled-components"
import update from "immutability-helper"
import math from "mathjs"
import Display from "./display"
import Button from "./Button"
import Buttons from "./Buttons"
import "./calculator.css"

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0;
  font-family: "Nothing You Could Do", cursive;
  user-select: none;
  margin-top: 20px;
`

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  width: 170px;
  height: 262px;
  background-color: #0095b8;
  border-radius: 10px;
`

class App extends Component {
  state = { number: [], start: ["0"] }

  calculateOperations = plus => {
    let result = this.state.number.join("")
    if (result.charAt(result.length - 1) === "+") {
      result = result + "0"
    }
    if (result) {
      result = math.eval(result)
      result = String(result)
      if (result.length <= 12) {
        if (plus) {
          result += "+"
        }
        this.setState({
          number: [result],
        })
      } else {
        this.setState({
          number: ["Too much !!! "],
        })
      }
    }

    return result.length
  }

  handleClick = e => {
    const value = e.target.getAttribute("data-value")
    const newNumber = update(this.state.number, {
      $push: [value],
    })
    const TooMuch = "Too much !!!"

    switch (value) {
      case "=":
        if (newNumber.includes(TooMuch)) {
          break
        } else {
          this.calculateOperations()
          break
        }

      default:
        if (value === "+") {
          console.log(this.state.number)
          if (
            this.state.number.includes("+") ||
            this.state.number.length === 0 ||
            this.state.number[0].includes("+")
          ) {
            console.log("ok")
            if (newNumber[-2] === "+") {
              break
            }
            if (
              this.state.number.length === 1 &&
              this.state.number[0].includes("+")
            )
              newNumber[-1] = "="
            this.calculateOperations(true)

            break
          }
        }
        if (newNumber.includes(TooMuch)) {
          this.setState({
            number: [TooMuch],
          })
          break
        } else if (newNumber.length <= 12) {
          if (newNumber.length === 1 && value === "0") {
            break
          } else
            this.setState({
              number: newNumber,
            })
          break
        } else {
          this.setState({
            number: [TooMuch],
          })
          break
        }
    }
  }

  getButtons = () => {
    const tab = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "+", "0", "="]
    return tab.map(i => <Button onClick={this.handleClick} value={i} key={i} />)
  }

  render() {
    return (
      <PageContainer>
        <CalculatorContainer>
          <Display display={this.state.number} displayZero={this.state.start} />
          <Buttons>{this.getButtons()}</Buttons>
        </CalculatorContainer>
      </PageContainer>
    )
  }
}

export default App
