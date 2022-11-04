import { useContext } from "react";
import { Container } from "react-bootstrap";
import { ContentContext } from "../../pages/about";
import AnimateOnView from "../ui/AnimateOnView";
import PageSectionTitle from "../ui/PageSectionTitle";
import AboutTexts from "./AboutTexts";
import Ideals, { Ideal } from "./Ideals";
import classes from "./style.module.css";
import Teams from "./Teams";

const icons = [
  "/images/vision.svg",
  "/images/mission.svg",
  "/images/value.svg",
];

const About = () => {
  const content: any = useContext(ContentContext);

  const ideals = content?.ideal?.map((item: any, idx: number) => {
    return {
      title: item?.title as string,
      body: item?.body as string,
      icon: icons[idx],
    } as Ideal;
  });

  return (
    <Container className={classes.container}>
      <AnimateOnView>
        <PageSectionTitle
          title={content?.page_section_heading_1?.title}
          subtitle={content?.page_section_heading_1?.subtitle}
        />
      </AnimateOnView>

      <AnimateOnView amount={0.3}>
        <Ideals ideals={ideals} />
      </AnimateOnView>

      <AboutTexts />

      <AnimateOnView>
        <PageSectionTitle
          title={content?.page_section_heading_2?.title}
          subtitle={content?.page_section_heading_2?.subtitle}
        />
      </AnimateOnView>

      <Teams />
    </Container>
  );
};

export default About;
