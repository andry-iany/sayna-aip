import { Container } from "react-bootstrap";
import classes from "./style.module.css";

interface SectionContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const SectionContainer = (props: SectionContainerProps) => {
  return (
    <Container className={`${classes.container} ${props.className}`}>
      {props.children}
    </Container>
  );
};

export default SectionContainer;
