import styled from "styled-components"
import media from "./media"

const Title = styled.h1`
  font-weight: 500;
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  letter-spacing: 18px;
  line-height: 50px;
  user-select: none;
  margin-bottom: 10px;
  padding-bottom: 0;

  ${media.lessThan("small")`
    width: 100%;
    letter-spacing: 10px;
  `}
`
export default Title
