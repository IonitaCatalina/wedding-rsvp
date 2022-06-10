import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button, Checkbox } from "semantic-ui-react";
import Swal from "sweetalert2";
import styled from "styled-components";

const SERVICE_ID = "service_kt0iqvs";
const TEMPLATE_ID = "template_ds3aecg";
const USER_ID = "qgThwRlfEPoe7n9bS";

const FormWrap = styled.div`
  width: 400px;
  label {
    font-family: "Courier New";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #000000;
  }
`;

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    partikip: "nu",
    single: false,
    couple: false,
    vegetarian: "nu",
    children: "nu",
  });

  console.log(formValues);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      () => {
        console.log(e.target);
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
    <FormWrap>
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
          onChange={(_, { value }) => {
            let values = {
              ...formValues,
              partikip: formValues.partikip === "da" ? "nu" : "da",
            };
            if (!value) {
              values = {
                ...values,
                single: false,
                couple: false,
                vegetarian: "nu",
                children: "nu",
              };
            }
            setFormValues(values);
          }}
          label="Poti participa?"
          value={formValues.partikip}
          checked={formValues.partikip === "da"}
          name="partikip"
        />
        {formValues.partikip === "da" ? (
          <>
            <Form.Group inline>
              <label htmlFor="cu-cine-vii">Vii cu cineva?</label>
              <Form.Radio
                label="Single"
                value={formValues.single ? "da" : "nu"}
                name="single"
                checked={formValues.single}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    single: !formValues.single,
                    couple: formValues.single,
                  });
                }}
              />
              <Form.Radio
                label="Cuplu"
                value={formValues.couple ? "da" : "nu"}
                name="couple"
                checked={formValues.couple}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    couple: !formValues.couple,
                    single: formValues.couple,
                  });
                }}
              />
            </Form.Group>
            <Form.Field
              id="children"
              name="children"
              control={Checkbox}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  children: formValues.children === "da" ? "nu" : "da",
                });
              }}
              label="Vin cu copiii"
              value={formValues.children}
            />
            <Form.Field
              id="vegetarian"
              name="vegetarian"
              control={Checkbox}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  vegetarian: formValues.vegetarian === "da" ? "nu" : "da",
                });
              }}
              label="Doresc meniu vegetarian"
              value={formValues.vegetarian}
            />
          </>
        ) : null}
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Lasa-ne mai multe detalii"
          name="user_message"
          placeholder="Message…"
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </FormWrap>
  );
};
export default ContactForm;
