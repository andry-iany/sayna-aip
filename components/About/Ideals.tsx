import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import classes from "./style.module.css";

const ideals = [
  {
    title: "notre vision",
    icon: "/images/vision.svg",
    body: "Etre le référent en Afrique de la révélation de champions nationaux et régionaux!",
  },
  {
    title: "notre mission",
    icon: "/images/mission.svg",
    body: "Accompagner la création et la réussite des PME africaine, l'insertion et la reconversion des jeunes.",
  },
  {
    title: "nos valeurs",
    icon: "/images/value.svg",
    body: "Ecoute, Ouverture, Curiosité, Agilité, Engagement, Passion",
  },
];

const Ideals = () => {
  const renderIdeals = ideals.map((ideal) => (
    <Col key={ideal.title}>
      <article className="text-white px-3 mb-5 mb-md-0">
        <div className="d-flex gap-3 align-items-center mb-3">
          <Image src={ideal.icon} width="50" height="50" alt={ideal.title} />
          <h3 className="mb-0 h4 text-capitalize">{ideal.title}</h3>
        </div>
        <p>{ideal.body}</p>
      </article>
    </Col>
  ));

  return (
    <Row xs={1} md={3} className={`${classes.ideals} py-5`}>
      {renderIdeals}
    </Row>
  );
};

export default Ideals;
