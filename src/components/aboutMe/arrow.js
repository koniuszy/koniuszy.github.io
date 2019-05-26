import React from "react"
import "./arrow.css"

const arrow = props => {
  return (
    <div onClick={props.onClick} className="animated-arrow">
      <span className="the-arrow -left">
        <span className="shaft" />
      </span>
      <span className="main">
        <span className="text">{props.title}</span>
        <span className="the-arrow -right">
          <span className="shaft" />
        </span>
      </span>
    </div>
  )
}

export default arrow
