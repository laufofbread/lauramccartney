import React from "react";

import LargeImage from "./large-image"
import TwoImageRow from "./two-image-row"
import TextContent from "./text-content"

function PageBuilder(props) {
  const { type, pageBuilder, _rawPageBuilder } = props;

  // Load the right component, based on the _type from Sanity
  const Components = {
    largeImage: LargeImage,
    twoImageRow: TwoImageRow,
    textContent: TextContent
  };


  // 'raw' content needs to be passed in for the PortableText Component
  return pageBuilder.map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block: block,
        type,
        raw: _rawPageBuilder[index]
      });
    }
  });
}

export default PageBuilder;
