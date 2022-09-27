import React from "react";
import Image from "next/image";

export default function cigar() {
  const cigarImage = ["/cigar bar.jpg", "/cigar bar.jpg"];

  return (
    <div className="content-img">
      {cigarImage.map((cigar) => {
        return (
          <>
            <Image src={cigar} width="1000" height="672" alt="/" />
          </>
        );
      })}
    </div>
  );
}
