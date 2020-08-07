import React from "react"
import NavBar from "/Users/alxcapa/gatsby-site/src/componants/header.js"
import contactForm from "/Users/alxcapa/gatsby-site/src/componants/contactform.js"
import FooterLink from "/Users/alxcapa/gatsby-site/src/componants/footer.js"
import "bootstrap/dist/css/bootstrap.min.css"
import ScrollIndicator from "/Users/alxcapa/gatsby-site/src/componants/scroll.js"

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
