import { ReactNode } from "react";
import classes from "./style.module.css";

type Props = {
  children: ReactNode;
};

const Mark = (props: Props) => {
  const { children } = props;
  return <span className={classes.markPrimary}>{children}</span>;
};

export default Mark;
