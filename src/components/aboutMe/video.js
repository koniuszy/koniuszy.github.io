import React from "react"
import styled from "styled-components"
import media from "../stylesComponents/media"

const Container = styled.div`
  border-radius: 5px;
  height: 350px;
  overflow: scroll;
  margin: 0 20px;
  z-index: 100;

  ${media.lessThan("large")`
    overflow: visible;
    height: 720px;
    margin: 0;
    border 1px solid #222;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `}
`

const style = {
  width: 400,
  height: 720,
  margin: 0,
}

const Click = styled.div`
  display: none;
  color: white;
  background-color: black;
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: -100;

  ${media.lessThan("medium")`
    display: block;
  `};
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  let autoPlay = ""
  if (videoSrcURL === undefined) {
    autoPlay = "autoplay=1&"
  }
  let url = `https://player.vimeo.com/video/338361703?${autoPlay}loop=1&title=0&byline=0&portrait=0`

  return (
    <Container>
      <iframe
        style={style}
        src={url}
        title={videoTitle}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      />
      <script src="https://player.vimeo.com/api/player.js" />
      <Click> Click here to start video</Click>
    </Container>
  )
}
export default Video
