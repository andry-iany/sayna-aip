import AnimateOnView from "../ui/AnimateOnView";
import classes from "./style.module.css";

const aboutTexts = [
  {
    title: "Conseil, Proposition",
    body: "Nous intervenons en amont à travers des conseils aux états pour la rédaction et l'implémentation de politiques appropriées, les bailleurs de fonds ou les entreprises dans leur politique RSE dans la conception de leur projets ou programmes ou encore en étant force de proposition sur ces initiatives.",
  },
  {
    title: "Le bras opérationnel de nos partenaires institutionnels",
    body: "En aval, notre intervention est directement à l'endroit des PME dans l'exécution de nos projet et programme ou en étant le bras opérationnel de nos partenaires institutionnel à travers des diagnostics, de la réflexion stratégique, de la formation, du coaching de dirigeants et pouvant aller jusqu'à la recherche de financement.",
  },
  {
    title: "Nous renforçons la capacité des jeunes",
    body: "Sur la thématique de l'insertion ou de la reconversion, nous renforçons la capacité des jeunes à travers nos programmes visant à développer leurs soft skills et structurer leurs compétences de gestion et les accompagnons à décrocher leur premier emploi.",
  },
];

const AboutTexts = () => {
  const renderAboutText = aboutTexts.map((txt, idx) => (
    <AnimateOnView key={idx}>
      <section
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
    </AnimateOnView>
  ));

  return <>{renderAboutText}</>;
};

export default AboutTexts;
