import SectionContainer from ".";
import classes from "./style.module.css";

interface SectionContainerWithTitleProps {
  children?: React.ReactNode;
  className?: string;
}

const SectionContainerWithTitle = (props: SectionContainerWithTitleProps) => {
  return (
    <SectionContainer
      className={`${classes.containerWithTitle} ${props.className}`}
    >
      {props.children}
    </SectionContainer>
  );
};

export default SectionContainerWithTitle;
