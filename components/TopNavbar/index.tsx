import Link from "../ui/Link";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./style.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "../../hooks";
import { useMemo } from "react";

const links = [
  { text: "à propos", href: "/about" },
  { text: "solutions", href: "/solutions" },
  { text: "nos programmes", href: "/programs" },
  { text: "stories", href: "/stories" },
  { text: "contact", href: "/contact" },
];

const TopNavbar = () => {
  const router = useRouter();
  const t = useTranslation();

  const links = useMemo(
    () => [
      { text: t("link.about"), href: "/about" },
      { text: t("link.solutions"), href: "/solutions" },
      { text: t("link.programs"), href: "/programs" },
      { text: t("link.stories"), href: "/stories" },
      { text: t("link.contact"), href: "/contact" },
    ],
    [t]
  );

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
          <Image
            src="/images/logo.svg"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
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
