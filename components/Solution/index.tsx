import Image from "next/image";
import { Fragment, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ContentContext } from "../../pages/solutions";
import AnimateOnView from "../ui/AnimateOnView";
import CardAndImage from "../ui/CardAndImage";
import PageSectionTitle from "../ui/PageSectionTitle";
import classes from "./style.module.css";

const solutionIcons = [
  "/images/study.svg",
  "/images/training.svg",
  "/images/finance.svg",
];

const Solution = () => {
  const content: any = useContext(ContentContext);
  const solutions = content?.card_and_image;

  console.log({ content });

  const renderSolutions = solutions.map((solution: any, idx: number) => (
    <AnimateOnView key={solution.title} amount={0.3}>
      <CardAndImage
        img={solutionIcons[idx % solutionIcons.length]}
        title={solution.title}
        dir={idx % 2 === 0 ? "text-left" : "text-right"}
      >
        {solution.content?.split(/\n/).map((para: any, idx: any) => (
          <p key={idx} className="mb-0">
            {para}
          </p>
        ))}
      </CardAndImage>
    </AnimateOnView>
  ));

  const renderSectors = content?.sector?.map((sector: any) => (
    <Col key={sector.title} className="px-5 mb-5">
      <AnimateOnView>
        <Image
          src={sector.image?.data?.attributes?.url}
          width="60"
          height="60"
          alt={sector.description}
        />
        <p className="pt-2 lead">{sector.description}</p>
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
      <div className={classes.allSolutions + " d-flex flex-column"}>
        {renderSolutions}
      </div>
      <AnimateOnView>
        <PageSectionTitle
          // TODO: fix the schema for it in strapi
          title={content?.page_section_heading_2?.[0]?.title}
          subtitle={content?.page_section_heading_2?.[0]?.subtitle}
        />
      </AnimateOnView>
      <Row xs="1" md="2" lg="3" className={classes.sectors + " mb-5"}>
        {renderSectors}
      </Row>
    </Container>
  );
};

export default Solution;
