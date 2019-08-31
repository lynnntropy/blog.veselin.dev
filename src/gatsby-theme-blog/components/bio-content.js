import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hi! I'm <Styled.a href="https://twitter.com/omegavesko" target="_blank">Veselin/Vesko</Styled.a>, and this is my blog.
    <br />
    This is where I ramble about code, and other stuff I care about.
  </Fragment>
)
