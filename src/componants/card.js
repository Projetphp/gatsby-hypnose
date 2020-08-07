import React, { Component } from "react"
import { Button, Card } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

class CardTest extends Component {
  render() {
    return (
      <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Img variant="top" src="" />
      </Card>
    )
  }
}

export default CardTest
