import React from "react";
import Image from "next/image";

export default function lobby() {
  const lobbyImage = ["/lobby bar.jpg"];

  return (
    <div className="content-img">
      {lobbyImage.map((lobby) => {
        return (
          <>
            <Image src={lobby} width="1000" height="672" alt="/" />
          </>
        );
      })}
    </div>
  );
}
