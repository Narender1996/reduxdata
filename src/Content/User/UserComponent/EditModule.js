import React from "react";
import { Formik } from "formik";
import { Button, Form, Header, Icon, Modal } from "semantic-ui-react";

function EditModule(props) {
  const { oPen, close, data, submitData } = props;
  return (
    <Modal open={oPen}>
      <Header icon="edit" content="Change The Value You Want" />
      <Modal.Content>
        <Formik
          initialValues={{
            firstname: data[0].firstname,
            lastname: data[0].lastname,
            email: data[0].email,
            password: data[0].password,
          }}
          onSubmit={(data) => {
            close();
            submitData(data);
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <Form.Input
                    fluid
                    label="First Name"
                    placeholder="First Neme ..."
                    type="text"
                    onChange={handleChange}
                    name={"firstname"}
                    value={values.firstname}
                    onBlur={handleBlur}
                  />
                </Form.Field>

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Last Name"
                    placeholder="Last Neme ..."
                    type="text"
                    onChange={handleChange}
                    name={"lastname"}
                    value={values.lastname}
                    onBlur={handleBlur}
                  />

                  <Form.Input
                    fluid
                    label="Email"
                    placeholder="Email ..."
                    type="text"
                    onChange={handleChange}
                    name={"email"}
                    value={values.email}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Input
                  fluid
                  type="text"
                  onChange={handleChange}
                  name={"password"}
                  label="password"
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="password"
                />
                <Modal.Actions>
                  <Button color="grey" type="submit">
                    <Icon name="checkmark" /> Save Changes
                  </Button>

                  <Button color="Black" onClick={() => close()}>
                    <Icon name="remove" /> Cancel
                  </Button>
                </Modal.Actions>
              </Form>
            );
          }}
        </Formik>
      </Modal.Content>
    </Modal>
  );
}

export default EditModule;
