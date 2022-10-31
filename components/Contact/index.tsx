import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import AnimateOnView from "../ui/AnimateOnView";
import PageSectionTitle from "../ui/PageSectionTitle";
import ContactForm from "./ContactForm";
import classes from "./style.module.css";

const contacts = [
  {
    country: "Togo",
    email: "freddkoudahoua@gmail.com",
    phone: "+228798609",
    location:
      "Nukafu, Rue en face de la Direction Générale de la SOTRAL, Immeuble MENSANH",
  },
  {
    country: "Côte d'Ivoire",
    phone: "+2250101460000",
    location: "Cocody Ambassades, A57 Rue du Bélier, Villa COLOMB",
  },
  {
    country: "Benin",
    location: "Cité vie nouvelle",
  },
  {
    country: "Niger",
    location: "Niamey",
  },
];

const Contact = () => {
  const renderContacts = contacts.map((contact) => (
    <Col key={contact.country} className={classes.country + " px-3 mb-5"}>
      <AnimateOnView>
        <div className="border p-3 h-100 shadow-sm">
          <h3 className="mb-4">{contact.country} </h3>
          <div className={"d-flex align-items-start gap-3"}>
            <span className={classes.img}>
              <Image src="/images/location.svg" layout="fill" alt="" />
            </span>
            <p className="mb-3">{contact.location}</p>
          </div>

          {contact.phone && (
            <div className={"d-flex align-items-start gap-3"}>
              <span className={classes.img}>
                <Image src="/images/phone.svg" layout="fill" alt="" />
              </span>
              <p className="mb-3">{contact.phone}</p>
            </div>
          )}

          {contact.email && (
            <div className={"d-flex align-items-start gap-3"}>
              <span className={classes.img}>
                <Image src="/images/email.svg" layout="fill" alt="" />
              </span>
              <p className="mb-3">{contact.email}</p>
            </div>
          )}
        </div>
      </AnimateOnView>
    </Col>
  ));

  return (
    <Container className={classes.container}>
      <AnimateOnView>
        <PageSectionTitle title="Nos Contacts" subtitle="" />
      </AnimateOnView>
      <Row xs={1} md={2} className={classes.contactDetail + " mx-auto mb-5"}>
        {renderContacts}
      </Row>
      <AnimateOnView amount={0.2}>
        <ContactForm />
      </AnimateOnView>
    </Container>
  );
};

export default Contact;
