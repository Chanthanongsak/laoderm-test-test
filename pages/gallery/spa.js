import React from "react";
import Image from "next/image";

export default function spa() {
  const spaImage = [
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
  ];

  return (
    <div className="content-img">
      {spaImage.map((spa) => {
        return (
          <>
            <Image src={spa} width="1000" height="672" alt="/" />
          </>
        );
      })}
    </div>
  );
}
