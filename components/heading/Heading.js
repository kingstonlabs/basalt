import PropTypes from "prop-types"
import React from "react"
import classnames from "classnames"

import { themr } from "@friendsofreactjs/react-css-themr"
import { HEADING } from "../identifiers"


const levelStyles = {
  0: "alpha",
  1: "alpha",
  2: "beta",
  3: "gamma",
  4: "delta",
  5: "epsilon",
  6: "zeta",
}


const Heading = ({
  centred = false,
  children,
  level = 1,
  noMargin = false,
  style = null,
  theme,
}) => {
  /*
  * Renders a heading of a given level - level 0 renders a span tag
  */
  const Tag = (level === 0) ? "span" : `h${level}`
  const levelStyle = style || levelStyles[level] || null

  const className = classnames(
    theme.heading,
    theme[levelStyle],
    {
      [theme.noMargin]: noMargin,
      [theme.centred]: centred,
    },
  )

  return (
    <Tag className={className}>{children}</Tag>
  )
}


Heading.propTypes = {
  centred: PropTypes.bool,
  children: PropTypes.node,
  level: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  noMargin: PropTypes.bool,
  style: PropTypes.string,
  theme: PropTypes.shape({
    centred: PropTypes.string,
    heading: PropTypes.string,
    noMargin: PropTypes.string,
  }),
}


export { Heading }
export default themr(HEADING)(Heading)
