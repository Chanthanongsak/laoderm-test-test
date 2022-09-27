import React from "react";
import Image from "next/image";

export default function restuarant() {
  const restuarantImage = [
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
  ];

  return (
    <div className="content-img">
      {restuarantImage.map((restuarant) => {
        return (
          <>
            <Image src={restuarant} width="1000" height="672" alt="/" />
          </>
        );
      })}
    </div>
  );
}
