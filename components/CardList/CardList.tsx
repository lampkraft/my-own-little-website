import classNames from "classnames";
import React from "react";
import styles from "./CardList.module.scss";
import { CardListProps } from "./CardList.types";

function CardList({ children }: CardListProps): JSX.Element {
  return <ul className={classNames(styles.cardList)}>{children}</ul>;
}

export default CardList;
