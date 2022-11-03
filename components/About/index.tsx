import { Container } from "react-bootstrap";
import AnimateOnView from "../ui/AnimateOnView";
import PageSectionTitle from "../ui/PageSectionTitle";
import AboutTexts from "./AboutTexts";
import Ideals from "./Ideals";
import classes from "./style.module.css";
import Teams from "./Teams";

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

const About = () => {
  return (
    <Container className={classes.container}>
      <AnimateOnView>
        <PageSectionTitle
          title="AFRICA INTEGRATION PARTNER"
          subtitle=" Africa Integration Partner est un cabinet global spécialisé dans
          l'accompagnement des politiques africaines sur les thématiques
          d'accompagnement des PME, de la transformation du secteur informel et
          d'insertion des jeunes."
        />
      </AnimateOnView>

      <AnimateOnView amount={0.3}>
        <Ideals ideals={ideals} />
      </AnimateOnView>

      <AboutTexts />

      <AnimateOnView>
        <PageSectionTitle
          title="L'equipe"
          subtitle="Une équipe jeune, avec une bonne compréhension de vos enjeux, engagée
          et expérimentée vous accompagne !"
        />
      </AnimateOnView>

      <Teams />
    </Container>
  );
};

export default About;
