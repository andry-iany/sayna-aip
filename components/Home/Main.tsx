import { Row, Col, Card, Container } from "react-bootstrap";
import Image from "next/image";
import classes from "./style.module.css";
import Button from "../ui/Button";

const Main = () => {
  return (
    <section className={classes.main + " text-center px-5"}>
      <Container>
        <div className={classes.textWrapper + " mb-5"}>
          <h2 className="mb-4 h3">AFRICA INTEGRATION PARTNER</h2>
          <p>
            Africa Integration Partner est un cabinet spécialisé dans
            l'accompagnement des PME et des entrepreneurs avec des expertises
            allant de la conception du projet à la recherche de financement en
            passant par le renforcement des capacités du dirigeant
          </p>
          <Button>Nous connaitre</Button>
        </div>

        <Row xs="1" md="2" className="py-5  mb-5">
          <Col className="pe-md-4 mb-5 mb-md-0">
            <Card className="h-100 text-center px-3 py-4">
              <div
                className={`${classes.iconWrapper} mx-auto rounded-circle d-flex align-items-center justify-content-center`}
              >
                <Image
                  className="d-block"
                  width={30}
                  height={30}
                  src="/images/growth.svg"
                  layout="fixed"
                  alt=""
                />
              </div>
              <Card.Body>
                <Card.Title className={classes.cardTitle}>
                  Développer le leadership des entrepreneurs, les outiller et
                  les assister
                </Card.Title>
                <Card.Text>
                  Diagnostic, Stratégie, Refonte et développement, Formation,
                  Suivi et accompagnements
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="ps-md-4">
            <Card className="h-100 text-center px-3 py-4">
              <div
                className={`${classes.iconWrapper} 
              mx-auto rounded-circle d-flex align-items-center justify-content-center`}
              >
                <Image
                  className="d-block"
                  width={30}
                  height={30}
                  src="/images/globe.svg"
                  layout="fixed"
                  alt=""
                />
              </div>
              <Card.Body>
                <Card.Title className={classes.cardTitle}>
                  Présent en Côte d'Ivoire et dans la sous-région Ouest
                  africaine,
                </Card.Title>
                <Card.Text>
                  Notre force réside dans l'expertise, l'état d'esprit et les
                  valeurs éthiques de nos équipes et notre approche du conseil
                  très opérationnel et pragmatique! En plus de vous conseiller,
                  nous vous accompagnons dans l'exécution et cela fait toute la
                  différence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className={classes.map + " mb-5"}></div>
      </Container>
    </section>
  );
};

export default Main;
