import { addParameters, configure } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'


addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

configure(
  [
    require.context("../components", true, /\.stories\.(js|mdx)$/),
  ],
  module
)
