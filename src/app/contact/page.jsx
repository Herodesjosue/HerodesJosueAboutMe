"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [exito, setExito] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message,
    };

    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/herodeslugo@gmail.com",
        headers
      );

      const responseData = await response.json();
      setExito(true);
      setTimeout(() => {
        setExito(false);
        handleClear();
      },2000)

      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <Form className="container p-5 text-white" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <Form.Group
             style={{marginTop: "20px"}}
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
                required
              />
              <Form.Text className="text-white">
                i'll never share your email with anyone else.
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
                required
              />
            </Form.Group>
          </div>
          <div className="col-lg-12">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>
          </div>
          {exito ? 
          <div className="col-lg-12">
            <h3 className="text-center" style={{backgroundColor: "green", padding: "10px",}}>
            Form sent
            </h3>
          </div>
          : null }
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
