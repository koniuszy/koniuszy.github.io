import React, { useState } from "react"

import styled, { keyframes } from "styled-components"
import { setTimeout } from "timers"
import media from "../stylesComponents/media"
import Title from "../stylesComponents/title"

const FadeInAnimation = keyframes`0% {
    opacity: 0;
  }

  100% {
     opacity: 1;
  }`

const FadeTitle = styled(Title)`
  animation: 3s ${FadeInAnimation};
  font-weight: 500;

  ${media.lessThan("small")`
    font-size: 38px;
    margin-bottom: 150px;
    margin-left: 15px;
    letter-spacing: 20px;
  `}

  ${media.between("small", "medium")`
    font-size: 50px;
    margin-bottom: 150px;
    margin-left: 50px;
    letter-spacing: 20px;
  `}

  ${media.between("medium", "large")`
    font-size: 54px;
    margin-bottom: 200px;
    margin-left: 100px;
    letter-spacing: 70px;
  `}

  ${media.between("large", "xLarge")`
    font-size: 74px;
    margin-bottom: 200px;
    margin-left: 130px;
    letter-spacing: 100px;
  `}

  ${media.greaterThan("xLarge")`
    font-size: 100px;
    margin-bottom: 200px;
    margin-left: 160px;
    letter-spacing: 140px;
  `}
`

const getTitle = () => {
  return <FadeTitle>EXPLORE</FadeTitle>
}

const PrintTitleAfter = () => {
  const [value, setValue] = useState(false)
  setTimeout(() => {
    setValue(true)
  }, 500)
  if (value === true) {
    return getTitle()
  }
}

const explore = () => {
  return <>{PrintTitleAfter()}</>
}

export default explore
