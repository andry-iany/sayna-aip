import { ReactNode } from "react";
import { Button as BSButton } from "react-bootstrap";
import classes from "./style.module.css";

type Props = {
  children: ReactNode;
};

const Button = (props: Props) => {
  const { children } = props;

  return (
    <BSButton className={classes.cBtn + " rounded-0 border-0 px-4"}>
      {children}
    </BSButton>
  );
};

export default Button;
