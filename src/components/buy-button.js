import React from "react"

const BuyButton = (props) => {
  const product = props.product

  return (
    <button className="snipcart-add-item btn"
            data-item-id={product.slug.current}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-url={`/shop/${product.slug.current}`}
            data-item-weight={product.weight}
            data-item-description={product.description}
            data-item-image={product.images[0].asset.url}
            data-item-has-taxes-included="true">
            Add to cart
    </button>
  )
}

export default BuyButton
