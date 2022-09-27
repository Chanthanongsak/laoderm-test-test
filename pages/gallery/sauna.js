import React from "react";
import Image from "next/image";

export default function sauna() {
  const saunaImage = ["/sauna.jpg", "/sauna.jpg", "/sauna.jpg", "/sauna.jpg"];

  return (
    <div className="content-img">
      {saunaImage.map((sauna) => {
        return (
          <>
            <Image src={sauna} width="1000" height="672" alt="/" />
          </>
        );
      })}
    </div>
  );
}
