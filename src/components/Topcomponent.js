import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Topcomponent() {
  return (
    <Navbar expand="lg" bg="light" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <strong>
          <Navbar.Brand href="#dashboard">Dashboard v2</Navbar.Brand>
        </strong>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search anything"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
