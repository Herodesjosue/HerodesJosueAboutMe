"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/herodeslugo@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        message: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form className="container p-5 text-white" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <Form.Group
              className="mb-3 w-100 mx-auto"
              controlId="formBasicEmail"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </div>
          <div className="col-lg-12">
            <Form.Group
              className="mb-3 w-100 mx-auto"
              controlId="formBasicEmail"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter Name"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </div>
          <div className="col-lg-12">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
