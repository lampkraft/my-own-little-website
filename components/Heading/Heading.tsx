import classNames from "classnames";
import React from "react";
import styles from "./Heading.module.scss";
import { HeadingProps } from "./Heading.types";

function Heading({ level = "h1", children }: HeadingProps): JSX.Element {
  const element = React.createElement(
    level,
    { className: classNames(styles.heading, styles[level], {}) },
    children
  );

  return element;
}

export default Heading;
