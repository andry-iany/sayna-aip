import { Col, Container, Row } from "react-bootstrap";
import Link from "../ui/Link";
import Image from "next/image";
import classes from "./style.module.css";

const socials = [
  {
    icon: "/images/facebook.svg",
    alt: "facebook icon",
    href: "https://facebook.com",
  },
  {
    icon: "/images/linkedin.svg",
    alt: "linkedin icon",
    href: "https://linkedin.com",
  },
  {
    icon: "/images/twitter.svg",
    alt: "twitter icon",
    href: "https://twitter.com",
  },
  {
    icon: "/images/whatsapp.svg",
    alt: "whatsapp icon",
    href: "https://whatsapp.com",
  },
];

const links = [
  { text: "Acceuil", href: "/" },
  { text: "à propos", href: "/about" },
  { text: "solutions", href: "/solutions" },
  { text: "nos programmes", href: "/programs" },
  { text: "stories", href: "/stories" },
  { text: "contact", href: "/contact" },
];

const Footer = () => {
  const renderSocials = socials.map((social) => (
    <a
      key={social.href}
      className="mx-2"
      href={social.href}
      target="_blank"
      rel="noreferrer"
    >
      <Image src={social.icon} alt={social.alt} width={20} height={20} />
    </a>
  ));

  const renderLinks = links.map((link) => (
    <Col key={link.href}>
      <Link href={link.href} className={classes.link}>
        {link.text}
      </Link>
    </Col>
  ));

  return (
    <footer className={classes.footer + " py-5 text-white"}>
      <Container>
        <div className="d-flex justify-content-between flex-column flex-md-row">
          <div>
            <h5>Liens utiles</h5>
            <Row xs={2}>{renderLinks}</Row>
          </div>
          <div className="pt-4 px-4">
            <div className={classes.address + " text-center mb-3"}>
              Lorem ipsum dolor sit amet.
              <br />
              Lorem ipsum dolor .
            </div>
            <div className={classes.socials + " d-flex justify-content-center"}>
              {renderSocials}
            </div>
          </div>
        </div>
        <div className={classes.legal + " text-center pt-5"}>
          <span>
            &copy; Copyright {new Date().getFullYear()} Africa Integration
            Partner
          </span>
          {" | "}
          <Link className="text-decoration-underline">Mentions légales</Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
