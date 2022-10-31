import { Card, Col, Container, Row } from "react-bootstrap";
import AnimateOnView from "../ui/AnimateOnView";
import PageSectionTitle from "../ui/PageSectionTitle";
import classes from "./style.module.css";

const programs = [
  {
    title: "Démarrez !",
    body: "Lorem ipsum dolor sit amet Lorem ipsum  sit am consectetur adipisicing elit. Dolores, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "Accélérez !",
    body: "Lorem ipsum dolor sit amet Lorem ipsum  sit am consectetur adipisicing elit. Dolores, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "Xxx avec GIZ",
    body: "Lorem ipsum dolor sit amet Lorem ipsum  sit am consectetur adipisicing elit. Dolores, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "XXX avec BM",
    body: "Lorem ipsum dolor sit amet Lorem ipsum  sit am consectetur adipisicing elit. Dolores, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const Programs = () => {
  const renderPrograms = programs.map((prg) => (
    <Col key={prg.title} className="px-3 text-center mb-3">
      <AnimateOnView>
        <Card className="py-3 rounded-0 shadow-sm">
          <Card.Body>
            <Card.Title className={classes.cardTitle + " mb-3"}>
              {prg.title}
            </Card.Title>
            <Card.Text>{prg.body}</Card.Text>
          </Card.Body>
        </Card>
      </AnimateOnView>
    </Col>
  ));

  return (
    <Container className={classes.container}>
      <AnimateOnView>
        <PageSectionTitle title="Nos programmes" subtitle="" />
      </AnimateOnView>
      <Row xs="1" sm="2" md="4" className="mb-5 pb-5">
        {renderPrograms}
      </Row>
    </Container>
  );
};

export default Programs;
