"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

export default function Topbar() {
  return (
    <Navbar className="shadow p-3 bg-body-tertiary" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">HJLG</Navbar.Brand>
        <Nav className="me-auto">
          {Links.map(({ path, name }) => {
            return (
              <Link className="p-2 links" key={name} href={path}>
                {name}
              </Link>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
}
