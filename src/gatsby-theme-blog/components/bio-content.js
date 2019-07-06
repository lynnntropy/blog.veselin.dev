import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hi! I'm <Styled.a href="https://twitter.com/omegavesko" target="_blank">Veselin</Styled.a>, and this is my blog.
    <br />
    I write about stuff I care about here (mostly code).
  </Fragment>
)
