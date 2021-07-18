import React from "react";
import { Container, Form, Button } from "react-bootstrap";
class AddContact extends React.Component {
  state = {
    Name: "",
    Email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.Name === "" || this.state.Email === "") {
      alert("Enter values");
      return;
    }
    this.props.AddContactHandler(this.state);
    this.setState({ Name: "", Email: "" });
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.add}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={this.state.Name}
              onChange={(e) => this.setState({ Name: e.target.value })}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter email"
              value={this.state.Email}
              onChange={(e) => this.setState({ Email: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Container>
    );
  }
}

export default AddContact;
