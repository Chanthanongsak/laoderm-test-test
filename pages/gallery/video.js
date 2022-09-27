import React, { useState } from "react";
import Image from "next/image";

export default function video() {
  const videoSrcAll = [
    "/pic1.jpg",
    "/pic1.jpg",
    "/pic1.jpg",
    "/pic1.jpg",
    "/pic1.jpg",
    "/pic1.jpg",
    "/pic1.jpg",
  ];

  return (
    <>
      <div id="video" className="content-img">
        {videoSrcAll.map((image) => {
          return (
            <>
              <div style={{ position: "relative" }}>
                <a href="#">
                  <Image
                    className="img-fluid"
                    alt="/"
                    src={image}
                    width="1000"
                    height="672"
                  />
                </a>
                <div className="ab-video">
                  <Image
                    alt="/"
                    src="/vdo-icon.png"
                    width="1000"
                    height="1000"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
