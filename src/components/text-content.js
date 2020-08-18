import React from 'react'

import BlockContent from '@sanity/block-content-to-react'

const TextContent = ({block, raw}) => {
  const {title, image} = block
console.log(raw);
  return (
    <section>
        <BlockContent blocks={raw.text} />
    </section>
  )
}

export default TextContent
