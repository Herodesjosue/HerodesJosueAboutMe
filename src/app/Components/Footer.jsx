"use client";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer shadow p-3 bg-body-tertiary">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-2 w-50 mx-auto">
            <hr className="text-white  my-0 opacity-25" />
          </div>
          <div className="col-lg-12 text-center p-3">
            <Link href="https://github.com/Herodesjosue" target="_blank">
              <GitHubIcon className="text-white me-2 fs-3" />
            </Link>
            <Link href="https://twitter.com/HerodesJosue" target="_blank">
              <TwitterIcon className="text-white me-2 fs-3" />
            </Link>
            <Link href="https://www.instagram.com/josue.797/" target="_blank">
              <InstagramIcon className="text-white me-2 fs-3" />
            </Link>
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
