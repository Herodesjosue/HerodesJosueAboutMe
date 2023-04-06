"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
    img: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "",
  },
  {
    img: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "",
  },
 
 
];

export default function Projects() {
  return (
    <div>
      <div className="container p-5" >
        <div  className="row" >
          <div className="col-lg-12 col-sm-3 d-flex flex-wrap justify-content-center">
            {data.map(({ img, title, text, link }) => {
              return (
                <>
                  <Card className="cardModi" style={{  width: "18rem", padding: "10px", marginRight: "10px", marginBottom: "10px" }}>
                    <Card.Img src={img} alt="" />
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


       
