import React, { useState, useEffect } from "react"

import styles from "../styles/nav.module.css"

const ShopCount = () => {
  let snipCount = window.Snipcart.store.getState().cart.items.length;
  const [count, setCount] = useState(snipCount);

  useEffect(() => {
      setCount(window.Snipcart.store.getState().cart.items.length);
  })

    return (
        <button className={`snipcart-checkout ${styles.cartCount}`}>
          <span>{count}</span>
        </button>
    )
}
export default ShopCount
