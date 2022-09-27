import React from "react";
import Image from "next/image";

export default function poolAndgym() {
  const poolImage = [
    "/pool.jpg",
    "/pool.jpg",
    "/pool.jpg",
    "/pool.jpg",
    "/pool.jpg",
    "/pool.jpg",
  ];

  return (
    <div className="content-img">
      {poolImage.map((pool) => {
        return (
          <>
            <Image src={pool} width="1000" height="672" alt="/" />
          </>
        );
      })}
    </div>
  );
}
