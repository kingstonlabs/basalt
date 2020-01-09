import { themr } from "@friendsofreactjs/react-css-themr"
import { HEADING } from "../identifiers"
import { Heading } from "./Heading"
import theme from "./theme.module.css"

const ThemedHeading = themr(HEADING, theme)(Heading)

export default ThemedHeading
export { ThemedHeading as Heading }
