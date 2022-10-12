import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import classes from "./style.module.css";
import FormSpeedRecruiting from "./FormSpeedRecruiting";
import FormContact from "./FormContact";

const ContactForm = () => {
  return (
    <section className={classes.tabWrapper + "  bg-light rounded shadow"}>
      <Tabs defaultActiveKey="info">
        <Tab
          className="p-4 border border-top-0"
          eventKey="info"
          title="Nous contacter"
        >
          <FormContact />
        </Tab>
        <Tab
          className="p-4 border border-top-0"
          eventKey="recruit"
          title="Candidature spontanée"
        >
          <FormSpeedRecruiting />
        </Tab>
      </Tabs>
    </section>
  );
};

export default ContactForm;
