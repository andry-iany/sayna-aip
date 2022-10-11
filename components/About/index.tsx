import Image from "next/image";
import { Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import PageSectionTitle from "../ui/PageSectionTitle";
import classes from "./style.module.css";

const aboutTexts = [
  {
    title: "...conseil, proposition",
    body: "Nous intervenons en amont à travers des conseils aux états pour la rédaction et l'implémentation de politiques appropriées, les bailleurs de fonds ou les entreprises dans leur politique RSE dans la conception de leur projets ou programmes ou encore en étant force de proposition sur ces initiatives.",
  },
  {
    title: "...le bras opérationnel de nos partenaires institutionnels",
    body: "En aval, notre intervention est directement à l'endroit des PME dans l'exécution de nos projet et programme ou en étant le bras opérationnel de nos partenaires institutionnel à travers des diagnostics, de la réflexion stratégique, de la formation, du coaching de dirigeants et pouvant aller jusqu'à la recherche de financement.",
  },
  {
    title: "...nous renforçons la capacité des jeunes",
    body: "Sur la thématique de l'insertion ou de la reconversion, nous renforçons la capacité des jeunes à travers nos programmes visant à développer leurs soft skills et structurer leurs compétences de gestion et les accompagnons à décrocher leur premier emploi.",
  },
];

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

const teams = [
  {
    name: "Freddy KOUDAHOUA",
    bio: "Financier et gestionnaire de projet de formation, Freddy bénéficie d’une longue expérience à l’international en stratégie d’entreprise et développement des affaires dans les domaines des télécoms, des Médias, du textile, des FMCG et du négoce. \n Plus de 12 années d’expérience à son active, Freddy cumule des rôles.",
    image: "/images/team.jpg",
  },
  {
    name: "Freddy KOUDAHOUA 2",
    bio: "Financier et gestionnaire de projet de formation, Freddy bénéficie d’une longue expérience à l’international en stratégie d’entreprise et développement des affaires dans les domaines des télécoms, des Médias, du textile, des FMCG et du négoce. \n Plus de 12 années d’expérience à son active, Freddy cumule des rôles…..",
    image: "/images/team_2.jpg",
  },
  {
    name: "Freddy KOUDAHOUA 3",
    bio: "Financier et gestionnaire de projet de formation, Freddy bénéficie d’une longue expérience à l’international en stratégie d’entreprise et développement des affaires dans les domaines des télécoms, des Médias, du textile, des FMCG et du négoce. \n Plus de 12 années d’expérience à son active, Freddy cumule des rôles…..",
    image: "/images/team_3.jpg",
  },
];

const About = () => {
  const renderAboutText = aboutTexts.map((txt, idx) => (
    <section
      key={idx}
      className={`
          ${classes.offerWrapper}
          ${idx % 2 ? "flex-md-row-reverse" : "flex-md-row"}
          d-flex flex-column justify-content-center align-items-center align-items-md-start 
          mb-4 mb-md-5 pb-md-5 text-center
        `}
    >
      <h3 className="py-2 w-100">{txt.title}</h3>
      <p className={`w-100 ${idx % 2 ? "text-md-end" : "text-md-start"}`}>
        {txt.body}
      </p>
    </section>
  ));

  const renderIdeals = ideals.map((ideal) => (
    <Col key={ideal.title}>
      <article className="text-white px-3 mb-5 mb-md-0">
        <div className="d-flex gap-3 align-items-center mb-3">
          <Image src={ideal.icon} width="50" height="50" />
          <h3 className="mb-0 h4 text-capitalize">{ideal.title}</h3>
        </div>
        <p>{ideal.body}</p>
      </article>
    </Col>
  ));

  const renderTeams = teams.map((team) => (
    <Col className="mb-4" key={team.name}>
      <Card
        className={`${classes.teamCard} rounded-0 border-0 bg-dark text-white`}
        style={{ height: "400px" }}
      >
        <Image
          src={team.image}
          alt={`Image of ${team.name}`}
          layout="fill"
          className="card-img rounded-0"
        />
        <Card.ImgOverlay className={classes.teamOverlay + " py-4 rounded-0"}>
          <Card.Title className={classes.teamName + " mb-3"}>
            {team.name}
          </Card.Title>
          <Card.Text>
            {team.bio.split("\n").map((para, idx) => (
              <Fragment key={idx}>
                {para} <br /> <br />
              </Fragment>
            ))}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
  ));

  return (
    <Container className={classes.container}>
      <PageSectionTitle
        title="AFRICA INTEGRATION PARTNER"
        subtitle=" Africa Integration Partner est un cabinet global spécialisé dans
          l'accompagnement des politiques africaines sur les thématiques
          d'accompagnement des PME, de la transformation du secteur informel et
          d'insertion des jeunes."
      />

      {renderAboutText}

      <Row xs={1} md={3} className={`${classes.ideals} py-5 mb-5`}>
        {renderIdeals}
      </Row>

      <section className={classes.textWrapper + " mb-5 py-4 text-center"}>
        <h2 className="mb-4 h3">L'equipe</h2>
        <p>
          Une équipe jeune, avec une bonne compréhension de vos enjeux, engagée
          et expérimentée vous accompagne !
        </p>
      </section>

      <Row xs={1} md={2} lg={3} className={classes.team + " mb-5"}>
        {renderTeams}
      </Row>
    </Container>
  );
};

export default About;
