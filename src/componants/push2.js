import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "src/style/global-css.css"
import Img from "gatsby-image"

const Product2 = () => {
  const data = useStaticQuery(graphql`
    query {
      productJson(id: { eq: "2" }) {
        id
        description
        title
      }

      image: file(relativePath: { eq: "artiste.jpg" }) {
        id
        childImageSharp {
          fixed(width: 585, height: 430) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container-push-content">
      <div className="child-left-container-push-content">
        <Img fixed={data.image.childImageSharp.fixed}></Img>
      </div>
      <div className="child-right-container-push-content">
        <h2>{data.productJson.title}</h2>
        <p className="description-push-content2">
          {data.productJson.description}
        </p>
      </div>
    </div>
  )
}
export default Product2
