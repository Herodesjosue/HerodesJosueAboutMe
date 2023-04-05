import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <h1
                style={{ fontSize: "60px", marginTop: "150px" }}
                className="text-white text-center fw-bolder "
              >
                About me
              </h1>
            </div>
            <div className="col-lg-12">
              <p className="text-white text-center">
                Hi¡ I'm from Venezuela and i'm 22 years old, everyday i'm
                learning something new,
                <br /> i would like to travel around of the world but well, will
                be for another day.
              </p>
            </div>
            <div className="col-lg-12 mt-3">
              <h2 className="text-white text-center fw-bolder">Knowledge</h2>
            </div>
            <div className="col-lg-12">
              <ul className="text-white d-flex justify-content-center flex-wrap">
                <li className="me-4">React</li>
                <li className="me-4">Next</li>
                <li className="me-4">Python</li>
                <li className="me-4">BootStrap</li>
                <li className="me-4">C#</li>
                <li className="me-4">SQL SERVER</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
