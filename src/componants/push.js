import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "src/style/global-css.css"
import Img from "gatsby-image"

const Product = () => {
  const data = useStaticQuery(graphql`
    query {
      productJson {
        title
        description
        cta_wording
      }
      allProductJson {
        totalCount
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
        <h1>{data.productJson.title}</h1>
        <p className="description-push-content">
          {data.productJson.description}
        </p>
        <a className="cta-push-content" href="">
          {data.productJson.cta_wording}
        </a>
      </div>
      <div className="child-right-container-push-content">
        <Img fixed={data.image.childImageSharp.fixed}></Img>
      </div>
    </div>
  )
}
export default Product
