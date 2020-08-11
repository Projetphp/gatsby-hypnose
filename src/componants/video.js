import React, { Component } from "react"
import ReactPlayer from "react-player"
import "bootstrap/dist/css/bootstrap.min.css"

class VideoFull extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=xk3BvNLeNgw"
          width="1920"
          height="898px"
        />
      </div>
    )
  }
}

export default VideoFull
