import classNames from "classnames";
import styles from "./Section.module.scss";
import { SectionProps } from "./Section.types";

function Section({
  children,
  asSplashScreen,
  fillContent,
  withPadding,
}: SectionProps): JSX.Element {
  return (
    <section
      className={classNames(styles.section, {
        [styles.splashScreen]: asSplashScreen,
        [styles.fillContent]: fillContent,
        [styles.withPadding]: withPadding,
      })}
    >
      {children}
    </section>
  );
}

export default Section;
