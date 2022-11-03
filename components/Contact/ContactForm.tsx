import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import classes from "./style.module.css";
import FormSpeedRecruiting from "./FormSpeedRecruiting";
import FormContact from "./FormContact";
import { useTranslation } from "../../hooks";

const ContactForm = () => {
  const t = useTranslation();

  return (
    <section className={classes.tabWrapper + "  bg-light rounded shadow"}>
      <Tabs defaultActiveKey="info">
        <Tab
          className="p-4 border border-top-0"
          eventKey="info"
          title={t("contact.form_title_contact-us")}
        >
          <FormContact />
        </Tab>
        <Tab
          className="p-4 border border-top-0"
          eventKey="recruit"
          title={t("contact.form_title_recruiting")}
        >
          <FormSpeedRecruiting />
        </Tab>
      </Tabs>
    </section>
  );
};

export default ContactForm;
