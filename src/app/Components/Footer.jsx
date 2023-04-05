import React from "react";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer shadow p-3 bg-body-tertiary">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-2 w-50 mx-auto">
            <hr className="text-white  my-0 opacity-25" />
          </div>
          <div className="col-lg-12 text-center p-2">
            <h3  id="contact" className="text-white">Contact</h3>
            {/* <GitHubIcon className="text-white me-2 fs-3" />
            <TwitterIcon className="text-white me-2 fs-3" /> */}
          </div>
          <div className="col-lg-12 mt-2 w-75 mx-auto">
            <hr className="text-white my-0 opacity-25" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
