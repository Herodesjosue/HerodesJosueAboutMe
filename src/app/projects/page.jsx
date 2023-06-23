"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    img: "/image/InmobiliariaDyV1.png",
    img2: "/image/InmobiliariaDyV2.png",
    img3:"/image/InmobiliariaDyV3.png",
    img4: "/image/InmobiliariaDyV4.png",
    title: "WebSite de Gestion y Control Inmobiliario",
    text: "Desarrollo de una Aplicación Web de Gestión Inmobiliario que permita llevar un orden de la información dentro de la Organización utilizando las tecnologías NextJS y Bootstrap para el Apartado del Frontend y el servicio Supabase como base de datos",
    link: "",
  },
  {
    img: "/image/gray.png",
    img2: "/image/gray.png",
    img3: "/image/gray.png",
    img4: "/image/gray.png",
    title: "Proximamente!",
    text: "Some quick",
    link: "",
  },
];

export default function Projects() {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-12 col-sm-3 d-flex flex-wrap justify-content-center">
            {data.map(({ img, title, text, link,img2, img3,img4 }) => {
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
                          style={{height: "250px", width: "320px"}}
                          alt="First slide"
                        />
                    
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img2}
                          style={{height: "250px", width: "320px"}}

                          alt="First slide"
                        />
                    
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img3}
                          style={{height: "250px", width: "320px"}}

                          alt="First slide"
                        />
                    
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img4}
                          style={{height: "250px", width: "320px"}}

                          alt="First slide"
                        />
                    
                      </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{text}</Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
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
