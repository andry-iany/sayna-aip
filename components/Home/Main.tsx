import { Col, Container, Row } from "react-bootstrap";
import classes from "./style.module.css";
import Button from "../ui/Button";
import CardAndImage from "../ui/CardAndImage";
import PageSectionTitle from "../ui/PageSectionTitle";
import Ideals from "../About/Ideals";
import Blogs from "../Stories/Blogs";

import type { Blog } from "../Stories/Blog";

const blogs: Blog[] = [
  {
    createdAt: new Date(),
    id: "1",
    img: "/images/hero.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    createdAt: new Date(),
    id: "2",
    img: "/images/team.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    createdAt: new Date(),
    id: "3",
    img: "/images/team_2.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Main = () => {
  return (
    <section className={classes.main + " px-2 px-md-5"}>
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

        <Ideals />

        <PageSectionTitle
          title="Nos addresses"
          subtitle="Présent en Côte d'Ivoire et dans la sous-région Ouest africaine"
        />

        <Row xs={1} sm={2} md={4} className="text-center mx-auto">
          <Col className="p-3">
            <div className="border h-100 shadow-sm py-5 px-4">
              <h3>Togo</h3>
              <p className="m-0">Nukafu</p>
            </div>
          </Col>
          <Col className="p-3">
            <div className="border h-100 shadow-sm py-5 px-4">
              <h3>Côte d'Ivoire</h3>
              <p className="m-0">Cocody Ambassades</p>
            </div>
          </Col>
          <Col className="p-3">
            <div className="border h-100 shadow-sm py-5 px-4">
              <h3>Benin</h3>
              <p className="m-0">Cité vie nouvelle</p>
            </div>
          </Col>
          <Col className="p-3">
            <div className="border h-100 shadow-sm py-5 px-4">
              <h3>Niger</h3>
              <p className="m-0">Niamey</p>
            </div>
          </Col>
        </Row>

        <div className=" my-5 pb-5 d-flex justify-content-center">
          <Button img="/images/arrow-right.svg" href="/contact">
            Nous Contacter
          </Button>
        </div>

        <Blogs blogs={blogs.slice(0, 3)} />
      </Container>
    </section>
  );
};

export default Main;
