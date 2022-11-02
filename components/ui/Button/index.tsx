import { ReactNode } from "react";
import { Button as BSButton } from "react-bootstrap";
import classes from "./style.module.css";
import Image from "next/image";
import Link from "../Link";

type Props = {
  children: ReactNode;
  img?: string;
  href?: string;
  className?: string;
  type?: "button" | "submit";
};

const Button = (props: Props) => {
  const { children, img, href, className, type = "button" } = props;

  const renderBtn = () => (
    <BSButton
      className={
        classes.cBtn +
        " rounded-pill border-0 px-4 d-inline-flex align-items-center gap-3 justify-content-center " +
        className
      }
      type={type}
    >
      {children}
      {img && (
        <Image
          className={classes.img}
          src={img}
          width={20}
          height={20}
          alt=""
        />
      )}
    </BSButton>
  );

  return href ? <Link href={href}>{renderBtn()}</Link> : renderBtn();
};

export default Button;
