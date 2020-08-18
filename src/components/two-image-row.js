import React from 'react'
import Img from 'gatsby-image'

const TwoImageRow = ({block}) => {
  const {imageOne, imageTwo} = block

  return (
    <section>
      <Img
        fluid={imageOne.image.asset.fluid || null}
        alt={imageOne.alt}
      />
      <Img
        fluid={imageTwo.image.asset.fluid || null}
        alt={imageTwo.alt}
      />
    </section>
  )
}

export default TwoImageRow
