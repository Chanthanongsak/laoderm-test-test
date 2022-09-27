import React from "react";
import Image from "next/image";

export default function exterior() {
  const exteriorSrc = ["/main.jpg", "/main.jpg", "/main.jpg", "/main.jpg"];
  return (
    <div className="content-img" id="exterior">
      {exteriorSrc.map((ex) => {
        return (
          <>
            <a href="#">
              <Image
                className="img-fluid"
                alt="/"
                src={ex}
                width="1000"
                height="672"
              />
            </a>
          </>
        );
      })}
    </div>
  );
}
