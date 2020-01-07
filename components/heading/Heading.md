# Heading

A heading at a specified level.

<!-- example -->
```jsx
import defaultTheme from "./theme.module.css";

<Heading level={3} theme={defaultTheme}>Level 3 Heading</Heading>
```

If you want to provide a theme via context, the component key is `ATHeading`.

## Properties

| Name              | Type                  | Default     | Description|
|:-----|:-----|:-----|:-----|
| `children`       | `Node`                | null    | The heading content.|
| `level`          | `Integer`             | `1`     | The heading level ie h1, h2, h3 a level of 0 implements a span tag.|


## Theme

| Name       | Description|
|:-----------|:-----------|
| `accent`   | Used for the root in case button is accent.|
| `button`   | Used for the root element in any button.|
| `flat`     | Used when the button is flat for the root element.|
| `floating` | Used when the button is floating for the root element.|
| `icon`     | For the icon inside a button.|
| `inverse`  | Used when colors are inverted.|
| `mini`     | Used for mini floating buttons.|
| `neutral`  | Used for neutral colored buttons.|
| `primary`  | Used for primary buttons when button is primary.|
| `raised`   | Used when the button is raised for root element.|
| `toggle`   | Used for toggle buttons in the root element.|
