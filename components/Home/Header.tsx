import classes from "./style.module.css";
import Button from "../ui/Button";
import { useContext, useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTranslation } from "../../hooks";
import { ContentContext } from "../../pages";

const Header = () => {
  const questionEltRef = useRef<HTMLSpanElement | null>(null);
  const content: any = useContext(ContentContext);

  const t = useTranslation();

  useEffect(() => {
    const headingElt = questionEltRef.current;
    if (!headingElt) return;

    const typed = new Typed(headingElt, {
      strings: content?.header?.questions?.map((q: any) => q.content),
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      backDelay: 3000,
      startDelay: 700,
    });

    return () => typed.destroy();
  }, [content?.header?.questions]);

  return (
    <header
      className={classes.header + " min-vh-100 d-flex align-items-center"}
    >
      <section className={classes.pageTitle}>
        <h2 className="mb-4 fw-normal">
          <span ref={questionEltRef}></span>
        </h2>

        <h1 className="mb-5">{content?.header?.title}</h1>

        <Button img="/images/arrow-right.svg" href="/solutions">
          {t("cta.our-services")}
        </Button>
      </section>
    </header>
  );
};

export default Header;
