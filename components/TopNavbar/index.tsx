import Link from "../ui/Link";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./style.module.css";
import Logo from "../Logo";
import { useRouter } from "next/router";

const links = [
  { text: "à propos", href: "/about" },
  { text: "solutions", href: "/solutions" },
  { text: "nos programmes", href: "/programs" },
  { text: "stories", href: "/stories" },
  { text: "contact", href: "/contact" },
];

const TopNavbar = () => {
  const router = useRouter();

  const renderLinks = links.map((link) => (
    <Link
      className={`${classes.link} 
      ${router.pathname === link.href ? classes.linkActive : ""}
    `}
      key={link.text}
      href={link.href}
    >
      {link.text}
    </Link>
  ));

  return (
    <Navbar bg="white" expand="lg" className="p-0 fixed-top w-100 shadow">
      <Container className="py-4">
        <Link href="/" className={classes.logo + " navbar-brand p-0"}>
          AIP
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="align-items-center py-4 py-lg-0">
          <Nav className="ms-auto gap-4">{renderLinks}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
