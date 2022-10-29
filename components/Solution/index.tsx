import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import CardAndImage from "../ui/CardAndImage";
import PageSectionTitle from "../ui/PageSectionTitle";
import classes from "./style.module.css";

const solutions = [
  {
    image: "/images/study.svg",
    title: "Etudes, Conseil & Accompagnement",
    subtitle:
      " Nos thématiques de conseils couvrent tous les métiers pouvant ainsi aller de votre réflexion stratégique jusqu'au financement en passant par la sécurisation juridique et fiscal de votre business.",
    options: [
      "Etudes (de marché, veille concurrentielle, Enquête mystères, …)",
      "Diagnostic, Stratégie et Finance",
      "Accompagnement dans l'élaboration de business plan",
      "Transformation organisationnel et développement commercial",
      "Politique pays (d'insertion des jeunes, de développement des start-Up/PME, de promotion des investissements…)",
      "Parcours de sélection de start-Up/PME",
    ],
  },
  {
    image: "/images/training.svg",
    title: "Formation",
    subtitle:
      " Nos experts vous accompagnent dans la formation de vos équipes en fonction de vos problématiques et enjeux business. Parce que l'humain est la ressource la plus précieuse de nos industries, nous accordons une attention particulière à nos parcours de formation pour l'enrichir de savoirs pratiques. Orienté résultat et soucieux du bénéfice client, nous accordons du prix à nos parcours de formation. Ainsi,",
    options: [
      "Nos experts sont minutieusement choisis pour vous offrir la meilleure valeur ajoutée ; au besoin, nous faisons intervenir d'autres professionnels pour offrir d'autres perspectives aux stagiaires.",
      "Nos contenus sont mis à jour pour rester dans l'ère du temps mais aussi et surtout pour l'adapter à vos enjeux business.",
      "Une démarche qualitative en s'assurant des attentes des stagiaires en début de formation et en faisant le point en fin de formation suivi d'une évaluation du formateur et du contenu pour une amélioration continue.",
    ],
  },
  {
    image: "/images/finance.svg",
    title: "Recherche de financement :",
    subtitle: "",
    options: [
      "Nous vous accompagnons dans vos choix d'investissement et vous accompagnons dans la demande de financement.",
      "Nous offrons également la possibilité de prendre des mandats pour vous obtenir des financements auprès de nos partenaires financiers, Banques, Fonds d'investissements.",
    ],
  },
];

const sectors = [
  {
    title:
      "Technologies d’information et de communication (Télécoms, Médias et services numériques)",
    icon: "/images/tech.svg",
  },
  {
    title: "Energie (conventionnel et renouvelables)",
    icon: "/images/energy.svg",
  },
  {
    title:
      "Grande Consommation : Agro Business, Restauration, Menuiserie, Textile, Mode, Maroquinerie & Cosmétique)",
    icon: "/images/agriculture.svg",
  },
  {
    title: "Transport et logistique",
    icon: "/images/transport.svg",
  },
  {
    title: "Immobilier",
    icon: "/images/real-estate.svg",
  },
  {
    title: "Industrie",
    icon: "/images/industry.svg",
  },
  {
    title: "Import, Export, Négoce",
    icon: "/images/importation.svg",
  },
];

const Solution = () => {
  const renderSolutions = solutions.map((solution, idx) => (
    <CardAndImage
      key={solution.title}
      img={solution.image}
      title={solution.title}
      dir={idx % 2 === 0 ? "text-left" : "text-right"}
    >
      <p> {solution.subtitle} </p>
      <ul>
        {solution.options.map((val, idx) => (
          <li key={idx}> {val} </li>
        ))}
      </ul>
    </CardAndImage>
  ));

  const renderSectors = sectors.map((sector) => (
    <Col key={sector.title} className="px-5 mb-5">
      <Image src={sector.icon} width="60" height="60" />
      <p className="pt-2 lead">{sector.title}</p>
    </Col>
  ));

  return (
    <Container className={classes.container}>
      <PageSectionTitle
        title="Nos services"
        subtitle="Nous intervenons dans:"
      />
      <div className={classes.allSolutions + " d-flex flex-column"}>
        {renderSolutions}
      </div>
      <PageSectionTitle title="Nos secteurs" subtitle="" />
      <Row xs="1" md="2" lg="3" className={classes.sectors + " mb-5"}>
        {renderSectors}
      </Row>
    </Container>
  );
};

export default Solution;
