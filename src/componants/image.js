import React, { Component } from "react"
import { Jumbotron, Button } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

class PushModule extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Fabienne ILLIC</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information. This is a
          simple hero unit, a simple jumbotron-style component for calling extra
          attention to featured content or information. This is a simple hero
          unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <p>
          <Button variant="primary">En savoir plus</Button>
        </p>
      </Jumbotron>
    )
  }
}

export default PushModule
