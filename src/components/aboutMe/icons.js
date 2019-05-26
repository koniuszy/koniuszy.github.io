import React, { useState } from "react"
import styled from "styled-components"
import { SocialIcon } from "react-social-icons"
import { CopyToClipboard } from "react-copy-to-clipboard"

const style = {
  height: 100,
  width: 100,
  zIndex: 50,
  cursor: "pointer",
  marginBottom: 30,
  marginLeft: 30,
  marginRight: 30,
}

const Copied = styled.span`
  opacity: ${props => (props.isCopied ? 0.5 : 0)};
  transition: opacity 1s;
  position: absolute;
`

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`

const CopiedWrapper = styled.div`
  position: relative;
`

const socialIcons = () => {
  const [isCopied, setCopy] = useState(false)
  return (
    <Icons>
      <SocialIcon
        style={style}
        url="https://www.facebook.com/profile.php?id=100008398896301"
        rel="noopener noreferrer"
        target="_blank"
      />
      <CopiedWrapper
        onClick={() => {
          setCopy(true)
        }}
      >
        <CopyToClipboard text="michal.stefan.konczak@gmail.com">
          <SocialIcon
            style={style}
            bgColor={"#D44638"}
            network="google"
            rel="noopener noreferrer"
            target="_blank"
          />
        </CopyToClipboard>
        <Copied isCopied={isCopied}>copied!</Copied>
      </CopiedWrapper>
      <SocialIcon
        style={style}
        bgColor={"#000"}
        url="https://github.com/koniuszy"
        rel="noopener noreferrer"
        target="_blank"
      />
    </Icons>
  )
}

export default socialIcons
