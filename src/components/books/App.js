import React from "react"
import Books from "./Books"
import styled from "styled-components"

const Title = styled.h3`
  font-size: 26px;
  margin-bottom: 5px;
  margin-top: 20px;
  margin-right: 2px;
`

const App = () => {
  return (
    <div>
      <Title>
        search Google's{" "}
        <a
          className="link"
          href="https://developers.google.com/books/docs/v1/using#WorkingVolumes"
        >
          database
        </a>
      </Title>
      <Books />
    </div>
  )
}

export default App
