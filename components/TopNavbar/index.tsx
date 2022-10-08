import Link from "../ui/Link";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./style.module.css";
import Logo from "../Logo";

const links = [
  { text: "à propos", href: "/" },
  { text: "solutions", href: "/" },
  { text: "nos programmes", href: "/" },
  { text: "stories", href: "/" },
  { text: "contact", href: "/" },
];

const TopNavbar = () => {
  const renderLinks = links.map((link) => (
    <Link className={classes.link} key={link.text} href={link.href}>
      {link.text}
    </Link>
  ));

  return (
    <Navbar bg="white" expand="lg" className="p-0 fixed-top w-100 shadow">
      <Container className="py-4">
        <Navbar.Brand href="#" className="p-0">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="align-items-center py-4 py-lg-0">
          <Nav className="ms-auto gap-4">{renderLinks}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
