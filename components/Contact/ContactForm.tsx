import { useState } from "react";
import Button from "../ui/Button";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import classes from "./style.module.css";

const ContactForm = () => {
  return (
    <section className={classes.tabWrapper + " border bg-light rounded mb-5"}>
      <Tabs defaultActiveKey="info">
        <Tab className="p-4" eventKey="info" title="Nous contacter">
          <FormContact />
        </Tab>
        <Tab className="p-4" eventKey="recruit" title="Candidature spontanée">
          <FormSpeedRecruiting />
        </Tab>
      </Tabs>
    </section>
  );
};

const FormSpeedRecruiting = () => {
  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Button className="w-100 my-4">Envoyer</Button>
    </Form>
  );
};

const FormContact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Votre nom" required />
        <Form.Control.Feedback type="invalid">
          Veuillez saisir votre nom
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="prénoms">
        <Form.Label>Prénoms</Form.Label>
        <Form.Control type="text" placeholder="Vos prénoms" required />
        <Form.Control.Feedback type="invalid">
          Veuillez saisir votre prénoms
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Votre email" required />
        <Form.Control.Feedback type="invalid">
          Veuillez saisir votre email
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="tel" placeholder="+1 23 456 789" required />
        <Form.Control.Feedback type="invalid">
          Veuillez saisir votre telephone
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Société</Form.Label>
        <Form.Control type="text" placeholder="Votre société" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Fonction</Form.Label>
        <Form.Select required>
          <option>Fonction</option>
          <option value="entrepreneur">Entrepreneur</option>
          <option value="fonctionnaire">Fonctionnaire</option>
          <option value="cadre">Cadre</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Veuillez saisir votre telephone
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Comment aviez-vous entendu parler de nous ?</Form.Label>
        <Form.Select required>
          <option>Comment aviez-vous entendu parler de nous ?</option>
          <option value="Séminaire">Séminaire</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value=" Presse écrite"> Presse écrite</option>
          <option value="SMS">SMS</option>
          <option value="Autres">Autres</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Veuillez choisir une réponse
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Candidature</Form.Label>
        <Form.Select required>
          <option>Comment aviez-vous entendu parler de nous ?</option>
          <option value=" Jeunes diplômés"> Jeunes diplômés</option>
          <option value="Entrepreneurs">Entrepreneurs</option>
          <option value="Cadres">Cadres</option>
          <option value="Autres à préciser">Autres à préciser</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Veuillez choisir une réponse
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Pays</Form.Label>
        <Form.Select required>
          <option>Pays</option>
          <option value="Togo"> Togo</option>
          <option value="Côte d'Ivoire">Côte d'Ivoire</option>
          <option value="Benin">Benin</option>
          <option value="Niger">Niger</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Veuillez choisir votre Pays
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="w-100 my-4">Envoyer</Button>
    </Form>
  );
};

export default ContactForm;
