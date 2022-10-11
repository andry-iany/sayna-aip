import { Container } from "react-bootstrap";
import PageSectionTitle from "../ui/PageSectionTitle";
import classes from "./style.module.css";

const Stories = () => {
  return (
    <Container
      className={classes.container + " d-flex flex-column text-center"}
    >
      <PageSectionTitle title="Stories" subtitle="" />
      <h4 className={classes.notReady}>This page is under construction. </h4>
    </Container>
  );
};

export default Stories;
