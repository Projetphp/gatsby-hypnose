import React from "react"
import NavBar from "src/componants/header.js"
import Product from "src/componants/push.js"
import VideoFull from "src/componants/video.js"
import FooterLink from "src/componants/footer.js"
import "bootstrap/dist/css/bootstrap.min.css"
import ScrollIndicator from "src/componants/scroll.js"

export default function Home() {
  return (
    <div>
      <NavBar />
      <ScrollIndicator />
      <VideoFull />
      <Product />
      <br />
      <FooterLink />
    </div>
  )
}
