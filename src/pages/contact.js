import React from "react"
import NavBar from "src/componants/global/header.js"

import FooterLink from "src/componants/global/footer.js"
import "bootstrap/dist/css/bootstrap.min.css"
import ScrollIndicator from "src/componants/scroll.js"

export default function Contact() {
  return (
    <div>
      <NavBar />
      <ScrollIndicator />
      <br />
      <contactForm />
      <FooterLink />
    </div>
  )
}
