import Image from "next/image";
import { Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import PageSectionTitle from "../ui/PageSectionTitle";
import AboutTexts from "./AboutTexts";
import Ideals from "./Ideals";
import classes from "./style.module.css";
import Teams from "./Teams";

const About = () => {
  return (
    <Container className={classes.container}>
      <PageSectionTitle
        title="AFRICA INTEGRATION PARTNER"
        subtitle=" Africa Integration Partner est un cabinet global spécialisé dans
          l'accompagnement des politiques africaines sur les thématiques
          d'accompagnement des PME, de la transformation du secteur informel et
          d'insertion des jeunes."
      />
      <Ideals />
      <AboutTexts />
      <PageSectionTitle
        title="L'equipe"
        subtitle="Une équipe jeune, avec une bonne compréhension de vos enjeux, engagée
          et expérimentée vous accompagne !"
      />
      <Teams />
    </Container>
  );
};

export default About;
