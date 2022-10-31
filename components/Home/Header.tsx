import classes from "./style.module.css";
import Button from "../ui/Button";
import Mark from "../ui/Mark";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const questions = [
  "Vous avez une idée ?",
  "Vous avez un projet?",
  "Vous avez déjà vos premiers clients ?",
];

const Header = () => {
  const questionEltRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const headingElt = questionEltRef.current;
    if (!headingElt) return;

    const typed = new Typed(headingElt, {
      strings: questions,
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      backDelay: 3000,
      startDelay: 700,
    });

    return () => typed.destroy();
  }, []);

  return (
    <header
      className={classes.header + " min-vh-100 d-flex align-items-center"}
    >
      <section className={classes.pageTitle}>
        <h2 className="h5 mb-4 fw-normal">
          <span ref={questionEltRef}></span>
        </h2>

        <h1 className="mb-5">
          Faites-vous accompagner par nos <Mark>experts</Mark> et garantissez
          votre <Mark>réussite</Mark>
        </h1>

        <Button img="/images/arrow-right.svg" href="/solutions">
          Nos Services
        </Button>
      </section>
    </header>
  );
};

export default Header;
