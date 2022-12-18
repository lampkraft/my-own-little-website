import classNames from "classnames";
import React from "react";
import styles from "./Card.module.scss";
import { CardProps } from "./Card.types";

function Card({ children, elementType = "li" }: CardProps): JSX.Element {
  const element = React.createElement(
    elementType,
    { className: styles.card },
    children
  );

  return element;
}

export default Card;
