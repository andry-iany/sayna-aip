import { Container } from "react-bootstrap";
import PageSectionTitle from "../ui/PageSectionTitle";
import classes from "./style.module.css";

const Solution = () => {
  return (
    <Container className={classes.container}>
      <PageSectionTitle
        title="Nos services"
        subtitle="Nous intervenons dans:"
      />
    </Container>
  );
};

export default Solution;
