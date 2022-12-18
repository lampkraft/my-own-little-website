import classNames from "classnames";
import React from "react";
import styles from "./Heading.module.scss";
import { HeadingProps } from "./Heading.types";

function Heading({
  level = "h1",
  children,
  align = "left",
}: HeadingProps): JSX.Element {
  const element = React.createElement(
    level,
    {
      className: classNames(
        styles.heading,
        styles[level],
        styles[`align-${align}`],
        {}
      ),
    },
    children
  );

  return element;
}

export default Heading;
