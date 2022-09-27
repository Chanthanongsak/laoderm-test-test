import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "../styles/Comps.module.css";

export default function test() {
  const mainSlide = [
    "/rooms.jpg",
    "/roombg2.jpg",
    "/roombg3.jpg",
    "/roombg4.jpg",
  ];

  return (
    <>
      <Carousel autoPlay={true} infiniteLoop={true}>
        {mainSlide.map((s) => {
          return (
            <>
              <div>
                <Image alt="/" src={s} width="1000" height="1000" />
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
}
