import React from "react"
import NavBar from "src/componants/header.js"

import FooterLink from "src/componants/footer.js"
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
