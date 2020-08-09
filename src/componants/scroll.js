import React, { Component } from "react"
import "src/style/global-css.css"

class ScrollIndicator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: 0,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollProgress)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollProgress)
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`

    console.log(scrolled)

    this.setState({
      scrolled: scrolled,
    })
  }

  render() {
    const progressContainerStyle = {
      height: "5px",
      position: "fixed",
      top: "98px",
      left: 0,
      width: "100vw",
      zIndex: 99,
    }

    const progressBarStyle = {
      height: "7px",
      background: "#88bef5",

      width: this.state.scrolled,
    }

    return (
      <div>
        <div className="progress-container" style={progressContainerStyle}>
          <div className="progress-bar" style={progressBarStyle} />
        </div>
      </div>
    )
  }
}

export default ScrollIndicator
