import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red" }}>{text}</div>
)

const style = {
  height: 450,
  width: "90%",
  zIndex: 100,
  margin: "auto",
}

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.87754,
      lng: 10.79271,
    },
    zoom: 12,
  }

  componentDidMount() {
    // prevent google (google is changing my roboto fonts)
    var head = document.getElementsByTagName("head")[0]
    // Save the original method
    var insertBefore = head.insertBefore
    // Replace it!
    head.insertBefore = function(newElement, referenceElement) {
      if (
        newElement.href &&
        newElement.href.indexOf(
          "https://fonts.googleapis.com/css?family=Roboto"
        ) === 0
      ) {
        return
      }
      insertBefore.call(head, newElement, referenceElement)
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={style}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyASQULyefTkP9jmLHNYNK5tux_kc4kFkDY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.87754} lng={10.79271} text="$" />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
