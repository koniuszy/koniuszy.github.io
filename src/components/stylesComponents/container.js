import styled from "styled-components"

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  user-select: none;
`

export default Container
