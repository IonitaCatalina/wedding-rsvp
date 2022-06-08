import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button, Checkbox } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_kt0iqvs";
const TEMPLATE_ID = "template_ds3aecg";
const USER_ID = "qgThwRlfEPoe7n9bS";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    partikip: "nu",
    plusOne: "cuplu",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="ContactForm">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="E-mail"
          name="user_email"
          placeholder="Email…"
          required
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Nume"
          name="user_name"
          placeholder="Name…"
          required
        />
        <Form.Field
          id="partikip"
          control={Checkbox}
          onChange={() =>
            setFormValues({
              ...formValues,
              partikip: formValues.partikip === "da" ? "nu" : "da",
            })
          }
          label="Poti participa?"
          value={formValues.partikip}
          name="partikip"
        />
        {/* <Form.Group inline>
          <label>Cu cine participi?</label>
          <Form.Radio
            label="single"
            value={formValues.plusOne === "single" ? "da" : "nu"}
            name="single"
            checked={formValues.plusOne === "single"}
            onChange={(_, { value }) => {
              setFormValues({
                ...formValues,
                plusOne: value === "da" ? "single" : "cuplu",
              });
            }}
          />
          <Form.Radio
            label="Cuplu"
            value={formValues.plusOne === "cuplu" ? "da" : "nu"}
            name="cuplu"
            checked={formValues.plusOne === "cuplu"}
            onChange={(_, { value }) => {
              setFormValues({
                ...formValues,
                plusOne: value === "da" ? "cuplu" : "single",
              });
            }}
          />
        </Form.Group> */}
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default ContactForm;
