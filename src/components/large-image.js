import React from 'react'
import Img from 'gatsby-image'

const LargeImage = ({block, raw}) => {
  const {altImage} = block

  return (
    <section className="content-wrapper sm-container">
      <Img
        fluid={altImage.image.asset.fluid || null}
        alt={altImage.alt}
      />
    </section>
  )
}

export default LargeImage
