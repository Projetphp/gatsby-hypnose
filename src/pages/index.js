import React from "react"
import NavBar from "/Users/alxcapa/gatsby-site/src/componants/header.js"
import Product from "/Users/alxcapa/gatsby-site/src/componants/push.js"
import VideoFull from "/Users/alxcapa/gatsby-site/src/componants/video.js"
import FooterLink from "/Users/alxcapa/gatsby-site/src/componants/footer.js"
import "bootstrap/dist/css/bootstrap.min.css"
import ScrollIndicator from "/Users/alxcapa/gatsby-site/src/componants/scroll.js"

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
