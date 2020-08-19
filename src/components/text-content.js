import React from 'react'

import BlockContent from '@sanity/block-content-to-react'

const TextContent = ({block, raw}) => {

  return (
    <section className="content-wrapper xsm-container">
        <BlockContent blocks={raw.text} />
    </section>
  )
}

export default TextContent
