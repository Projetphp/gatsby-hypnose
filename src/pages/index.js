import React from "react"
import NavBar from "src/componants//global/header.js"
import Product2 from "src/componants/push.js"
import Product from "src/componants/push2.js"
import VideoFull from "src/componants/video.js"
import FooterLink from "src/componants/global/footer.js"
import "bootstrap/dist/css/bootstrap.min.css"
import ScrollIndicator from "src/componants/scroll.js"

export default function Home() {
  return (
    <div>
      <NavBar />
      <ScrollIndicator />
      <VideoFull />
      <Product2 />
      <br />
      <br />
      <Product />

      <br />
      <FooterLink />
    </div>
  )
}
