import Button from "../ui/Button";
import Form from "react-bootstrap/Form";

const FormSpeedRecruiting = () => {
  return (
    <Form
      name="speed-recruiting"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      encType="multipart/form-data"
    >
      <input type="hidden" name="form-name" value="speed-recruiting" />

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>Votre CV</Form.Label>
        <Form.Control name="cv" type="file" required accept="image/*, .pdf" />
        <Form.Text>Vous pouvez importer des fichiers images ou .pdf</Form.Text>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>Lettre de motivation</Form.Label>
        <Form.Control name="lm" type="file" required accept="image/*, .pdf" />
        <Form.Text>Vous pouvez importer des fichiers images ou .pdf</Form.Text>
      </Form.Group>

      <Button className="w-100 my-4" type="submit">
        Envoyer
      </Button>
    </Form>
  );
};

export default FormSpeedRecruiting;
