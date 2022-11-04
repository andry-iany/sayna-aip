import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ContentContext } from "../../pages/programs";
import AnimateOnView from "../ui/AnimateOnView";
import PageSectionTitle from "../ui/PageSectionTitle";
import classes from "./style.module.css";

const Programs = () => {
  const content: any = useContext(ContentContext);

  const renderPrograms = content?.programme?.map((prg: any) => (
    <Col key={prg.id} className="px-3 text-center mb-3">
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
        <PageSectionTitle
          title={content?.page_section_heading_1?.title}
          subtitle={content?.page_section_heading_1?.subtitle}
        />
      </AnimateOnView>
      <Row xs="1" sm="2" md="4" className="mb-5 pb-5">
        {renderPrograms}
      </Row>
    </Container>
  );
};

export default Programs;
