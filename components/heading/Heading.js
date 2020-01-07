import PropTypes from "prop-types"
import React from "react"
import { themr } from "@friendsofreactjs/react-css-themr"
import { HEADING } from "../identifiers"


const Heading = ({
  level = 1,
  modifiers = [],
  children,
  theme,
}) => {
  /*
  * Renders a heading of a given level - level 0 renders a span tag
  */
  const classModifiers = modifiers.map(
    (modifier) => `heading--${modifier}`,
  ).join(" ")
  const Tag = (level === "0") ? "span" : `h${level}`

  return (
    <Tag className={`heading ${classModifiers} ${theme.heading}`}>{children}</Tag>
  )
}


Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.shape({
    heading: PropTypes.string,
  }),
}


export { Heading }
export default themr(HEADING)(Heading)
