import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageLocalFluid = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })
      if (!image) {
        return null
      }
      const imageFluid = image.node.childImageSharp.fluid
      return (
        <Img
          alt={alt}
          fluid={imageFluid}
          // objectFit="contain"
          // objectPosition="50% 50%"
        />
      )
    }}
  />
)

export default ImageLocalFluid
