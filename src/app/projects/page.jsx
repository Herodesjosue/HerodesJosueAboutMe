"use client";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    img: "/image/InmobiliariaDyV1.png",
    img2: "/image/InmobiliariaDyV2.png",
    img3: "/image/InmobiliariaDyV3.png",
    img4: "/image/InmobiliariaDyV4.png",
    title: "Real Estate Management and Control Website",
    text: "Development of a Real Estate Management Web Application that allows keeping an order of information within the Organization using NextJS and Bootstrap technologies for the Frontend Section and the Supabase service as a database",
    link: "",
  },
  {
    img: "/image/reactdnd.png",
    img2: "/image/reactdnd.png",
    img3: "/image/reactdnd.png",
    img4: "/image/reactdnd.png",
    title: "react-dnd-kit",
    text: "An User List made with the library dnd A modular toolkit for building  drag & drop interfaces.",
    link: "https://react-dnd-kit-roan.vercel.app",
  },
  {
    img: "/image/taskmanager.png",
    img2: "/image/taskmanager.png",
    img3: "/image/taskmanager.png",
    img4: "/image/taskmanager.png",
    title: "task-card-react",
    text: "Hello there, 😊",
    link: "https://task-card-react-typescript.vercel.app",
  },
  // {
  //   img: "/image/gray.png",
  //   img2: "/image/gray.png",
  //   img3: "/image/gray.png",
  //   img4: "/image/gray.png",
  //   title: "Proximamente!",
  //   text: "Some quick",
  //   link: "https://react-dnd-kit-roan.vercel.app",
  // },
];

export default function Projects() {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-12 col-sm-3 d-flex flex-wrap justify-content-center">
            {data.map(({ img, title, text, link, img2, img3, img4 }) => {
              return (
                <>
                  <Card
                    className="cardModi"
                    style={{
                      width: "500px",
                      height: "560px",
                      padding: "10px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    {/* <Card.Img src={img} alt="" /> */}
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img}
                          style={{ height: "250px", width: "320px" }}
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img2}
                          style={{ height: "250px", width: "320px" }}
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img3}
                          style={{ height: "250px", width: "320px" }}
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img4}
                          style={{ height: "250px", width: "320px" }}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{text}</Card.Text>
                      <Button variant="primary">
                        <Link
                          target="_blank"
                          className="text-decoration-none text-light"
                          href={link}
                        >
                          Go to Site
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
