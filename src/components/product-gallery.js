import React, { useState } from "react"
import Img from "gatsby-image"

import styles from "../styles/product.module.css"

const ProductGallery = (props) => {
  const images = props.images;

  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeThumb, setActiveThumb] = useState(0);

  const changeImage = (image, i) => {
    console.log(i);
    setActiveImage(image);
    setActiveThumb(i)
  }

  return (
    <section className={styles.productGallery}>

      <Img className={styles.galleryActive} fluid={activeImage.asset.fluid}/>

      {images.map((image, i) =>  (
        <figure className={`${styles.galleryThumbnail} ${activeThumb === i ? styles.active : ''}`}
                key={i}
                onClick={() => changeImage(image, i)}>
          <Img fluid={image.asset.fluid}/>
        </figure>
      ))}

    </section>
  )
}

export default ProductGallery
