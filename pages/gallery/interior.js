import React from "react";
import Image from "next/image";

export default function interior() {
  const interiorSrc = [
    "/bg-main.jpg",
    "/bg-main.jpg",
    "/bg-main.jpg",
    "/bg-main.jpg",
    "/bg-main.jpg",
  ];
  return (
    <div className="content-img">
      {interiorSrc.map((int) => {
        return (
          <>
            <Image src={int} width="1000" height="672" alt="/" />
          </>
        );
      })}
    </div>
  );
}
