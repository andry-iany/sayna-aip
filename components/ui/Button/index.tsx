import { ReactNode } from "react";
import { Button as BSButton } from "react-bootstrap";
import classes from "./style.module.css";
import Image from "next/image";
import Link from "../Link";

type Props = {
  children: ReactNode;
  img?: string;
  href?: string;
};

const Button = (props: Props) => {
  const { children, img, href } = props;

  return (
    <Link href={href}>
      <BSButton
        className={
          classes.cBtn +
          " rounded-0 border-0 px-4 d-inline-flex align-items-center gap-3"
        }
      >
        {children}
        {img && (
          <Image className={classes.img} src={img} width={20} height={20} />
        )}
      </BSButton>
    </Link>
  );
};

export default Button;
