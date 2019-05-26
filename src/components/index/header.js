import React, { useState } from "react"

import styled, { keyframes } from "styled-components"
import Title from "../stylesComponents/title"

const FadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
     opacity: 1;
  }
`

const FadeTitle = styled(Title)`
  margin-top: 50px;
  animation: 3s ${FadeInAnimation};
`

const getName = () => {
  return <FadeTitle>MICHAL KONCZAK</FadeTitle>
}

const PrintNameWithDelay = () => {
  const [value, setValue] = useState(false)

  if (value === false) {
    setTimeout(() => {
      setValue(true)
    }, 250)
  }

  if (value === true) {
    return getName()
  }
}

const header = () => {
  return <> {PrintNameWithDelay()} </>
}

export default header
