import Button from "../ui/Button";
import Form from "react-bootstrap/Form";

const FormSpeedRecruiting = () => {
  return (
    <Form
      name="query"
      method="POST"
      data-netlify="true"
      encType="multipart/form-data"
    >
      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>Votre CV</Form.Label>
        <Form.Control name="cv" type="file" required />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>Lettre de motivation</Form.Label>
        <Form.Control name="lm" type="file" required />
      </Form.Group>

      <Button className="w-100 my-4" type="submit">
        Envoyer
      </Button>
    </Form>
  );
};

export default FormSpeedRecruiting;
