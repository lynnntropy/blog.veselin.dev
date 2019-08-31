/** @jsx jsx */
import { jsx } from "theme-ui"
import { preToCodeBlock } from "mdx-utils"
import PrismCodeBlock from "@theme-ui/prism"

import headings from "../../node_modules/gatsby-theme-blog/src/components/headings"

const CodeBlock = preProps => {
  const props = preToCodeBlock(preProps)

  if (props) {
    const { codeString, ...restProps } = props

    return (
      <div sx={{ mb: 3 }}>
        <PrismCodeBlock {...restProps}>{codeString}</PrismCodeBlock>
      </div>
    )
  } else {
    return <pre {...preProps} />
  }
}

export default {
  pre: CodeBlock,
  ...headings,
}
