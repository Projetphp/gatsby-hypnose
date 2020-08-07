import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

class FooterLink extends Component {
  render() {
    return (
      <Container>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col>
            <p>
              <a>Métiers</a>
            </p>
            <p>
              <a>Hypnose</a>
            </p>
            <p>
              <a>Magnétisme</a>
            </p>
            <p>
              <a>Sophrologie</a>
            </p>
          </Col>
          <Col>
            <p>
              <a> Parcours</a>
            </p>
            <p>
              <a>Formations</a>
            </p>
            <p>
              <a>Art et Inspirations</a>
            </p>
          </Col>
          <Col>
            <p>
              <a> Les séances</a>
            </p>
            <p>
              <a>Prise de rendez-vous</a>
            </p>
            <p>
              <a>Livre d'or</a>
            </p>
            <p>
              <Link to="/contact/">Contact</Link>
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
      </Container>
    )
  }
}

export default FooterLink
