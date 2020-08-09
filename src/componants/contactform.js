import React, { Component } from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "src/style/custom-bootstrap.css"

class contactForm extends Component {
  render() {
    return (
      <form>
        <label>
          Nom :
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    )
  }
}

export default contactForm
