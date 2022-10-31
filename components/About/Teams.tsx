import Image from "next/image";
import { Fragment } from "react";
import { Col, Card, Row } from "react-bootstrap";
import AnimateOnView from "../ui/AnimateOnView";
import classes from "./style.module.css";

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

const Teams = () => {
  const renderTeams = teams.map((team) => (
    <Col className="mb-4" key={team.name}>
      <AnimateOnView amount={0.4}>
        <Card
          className={`${classes.teamCard} rounded-0 border-0 bg-light text-white`}
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
      </AnimateOnView>
    </Col>
  ));

  return (
    <Row xs={1} md={2} lg={3} className={classes.team}>
      {renderTeams}
    </Row>
  );
};

export default Teams;
