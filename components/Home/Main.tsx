import { Container } from "react-bootstrap";
import classes from "./style.module.css";
import Button from "../ui/Button";
import CardAndImage from "../ui/CardAndImage";
import PageSectionTitle from "../ui/PageSectionTitle";

const Main = () => {
  return (
    <section className={classes.main + " px-5"}>
      <Container>
        <PageSectionTitle
          title="AFRICA INTEGRATION PARTNER"
          subtitle=" Africa Integration Partner est un cabinet spécialisé dans
            l'accompagnement des PME et des entrepreneurs avec des expertises
            allant de la conception du projet à la recherche de financement en
            passant par le renforcement des capacités du dirigeant"
        />

        <div className={classes.propositions + " d-flex flex-column"}>
          <CardAndImage
            title="Développer le leadership des entrepreneurs, les outiller et les assister"
            img="/images/finance.svg"
          >
            <p className="mb-4">
              Diagnostic, Stratégie, Refonte et développement, Formation, Suivi
              et accompagnements
            </p>
            <Button img="/images/arrow-right.svg" href="/solutions">
              Nos Services
            </Button>
          </CardAndImage>

          <CardAndImage
            title="Présent en Côte d'Ivoire et dans la sous-région Ouest africaine"
            img="/images/study.svg"
            dir="text-right"
          >
            <p className="mb-4">
              Notre force réside dans l'expertise, l'état d'esprit et les
              valeurs éthiques de nos équipes et notre approche du conseil très
              opérationnel et pragmatique! En plus de vous conseiller, nous vous
              accompagnons dans l'exécution et cela fait toute la différence.
            </p>
            <Button img="/images/arrow-right.svg" href="/about">
              Nous connaitre
            </Button>
          </CardAndImage>
        </div>
      </Container>
    </section>
  );
};

export default Main;
