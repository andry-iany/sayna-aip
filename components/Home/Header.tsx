import classes from "./style.module.css";
import Button from "../ui/Button";
import Mark from "../ui/Mark";

const Header = () => {
  return (
    <header
      className={classes.header + " min-vh-100 d-flex align-items-center "}
    >
      <section className={classes.pageTitle + " c-text-secondary"}>
        <h2 className="h5 mb-4 fw-normal">
          Vous avez une idée ? Un projet ?
          <br />
          Vous avez déjà vos premiers clients ?
        </h2>

        <h1 className="text-uppercase mb-4 ">
          Faites-vous accompagner par nos <Mark>experts</Mark> et garantissez
          votre <Mark>réussite</Mark>!
        </h1>

        <Button href="/solutions">Découvrez nos services</Button>
      </section>
    </header>
  );
};

export default Header;
